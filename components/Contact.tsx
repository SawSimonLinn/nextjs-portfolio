'use client';

import React, { useRef } from 'react';
import { HoverBorderGradientDemo } from './HoverBorderGradientDemo';
import { Vortex } from '@/components/ui/vortex';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xkgjkzvd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      window.location.href = '/thank-you';
    } else {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id='contact' className='w-full px-4 py-20 bg-black text-white'>
      <Vortex
        backgroundColor='black'
        className='flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full'
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>Let’s Connect</h2>
          <p className='text-neutral-700 dark:text-neutral-300 mb-10'>
            Whether you’re interested in working together or just want to say
            hi, my inbox is always open.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='grid gap-6 md:grid-cols-2'
          >
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='bg-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20'
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='bg-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20'
            />
            <textarea
              name='message'
              placeholder='Your Message'
              rows={5}
              required
              className='bg-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 md:col-span-2'
            />
            <div className='md:col-span-2 flex justify-center'>
              <HoverBorderGradientDemo text='Send message' />
            </div>
          </form>
        </div>
      </Vortex>
    </section>
  );
};

export default Contact;
