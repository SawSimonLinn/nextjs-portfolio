'use client';

import React, { useRef, useState, useEffect } from 'react';
import { HoverBorderGradientDemo } from './HoverBorderGradientDemo';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

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
      alert('Something went wrong 😢');
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
        id='contact'
        className='w-full px-4 py-20 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300'
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto text-center'
        >
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>Let’s Connect</h2>
          <p className='text-neutral-700 dark:text-neutral-300 mb-10'>
            Whether you’re interested in working together or just want to say
            hi, my inbox is always open.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            ref={formRef}
            onSubmit={handleSubmit}
            className='grid gap-6 md:grid-cols-2'
          >
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='bg-black/10 dark:bg-white/10 text-black dark:text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20'
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='bg-black/10 dark:bg-white/10 text-black dark:text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20'
            />
            <textarea
              name='message'
              placeholder='Your Message'
              rows={5}
              required
              className='bg-black/10 dark:bg-white/10 text-black dark:text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 md:col-span-2'
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='md:col-span-2 flex justify-center'
            >
              <HoverBorderGradientDemo text='Send message' />
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;
