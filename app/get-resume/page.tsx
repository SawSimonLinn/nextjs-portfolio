'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import { AnimatedTooltip } from '../../components/ui/animated-tooltip';

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
];

export default function GetResumePage() {
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (
      form.elements.namedItem('name') as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem('email') as HTMLInputElement
    ).value.trim();
    const role = (form.elements.namedItem('role') as HTMLSelectElement).value;

    if (!name || !email || !role) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // ✨ Send the email to the user
      await emailjs.send(
        'service_yzsraso',
        'template_qmi0jlw',
        {
          name,
          email,
          role,
        },
        'G6xdIM90qJaPeef0w'
      );

      // ✅ Show success message
      setSubmitted(false); // 👈 switch to thank-you message
    } catch (error: any) {
      console.error('EmailJS error:', error?.text || error);
      alert(`Something went wrong: ${error?.text || 'unknown error'} 💔`);
    }
  };

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900'>
      <Link href='/'>
        <IoIosArrowBack className='absolute lg:top-20 lg:left-30 lg:text-3xl md:top-15 md:left-10 text-2xl top-12 left-6' />
      </Link>
      <div className='w-full flex flex-col h-dvh lg:flex-row justify-center items-center bg-white dark:bg-black py-25 lg:py-50  px-6'>
        <div className='text w-full lg:w-2/3 text-center lg:text-left'>
          <p className='text-blue-500 dark:text-yellow-500 font-extrabold text-xl uppercase mb-2'>
            Saw Simon Linn{' '}
            <span className='dark:text-white text-black text-base capitalize'>
              frontend developer
            </span>
          </p>
          <h1 className='dark:text-white text-black  text-4xl md:text-6xl font-extrabold my-6 leading-tight'>
            Download My Resume & Learn Why I’m Your Dev
          </h1>
          <p className='my-2 text-lg md:text-xl dark:text-white text-blue-900 '>
            100+ developers and recruiters already did—now it’s your turn. Peek
            inside to see the skills, passion, and pixel-perfect magic I bring
            to every project.
          </p>
          <div className='flex flex-row items-center justify-center lg:justify-start lg:mb-5 mb-10 mt-15 w-full'>
            <AnimatedTooltip items={people} />
          </div>
          <a
            href='#download'
            className='inline-block mt-8 bg-blue-500 hover:bg-blue-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-black py-5 px-20 text-sm font-bold uppercase rounded-xl  transition cursor-pointer'
          >
            Download now
          </a>
        </div>
      </div>

      <div className='w-full flex items-center justify-center mt-20 bg-neutral-200 dark:bg-neutral-900 px-4 pt-16'>
        <form
          id='download'
          onSubmit={handleSubmit}
          className='bg-white dark:bg-black max-w-4xl  mx-auto px-10 py-10 lg:py-25 lg:px-30 rounded-lg shadow-md  text-black dark:text-white'
        >
          <h2 className='text-3xl md:text-4xl dark:text-white text-black font-bold text-center mb-4'>
            Get Instant Access to My Resume
          </h2>
          <p className='text-center dark:text-yellow-100 text-blue-900 text-sm'>
            Whether you&apos;re a fellow developer, recruiter, or just curious
            I&apos;d love to connect! Drop your name and email to get my resume
            straight away.
          </p>
          {submitted ? (
            <div className='space-y-5 w-full flex flex-col justify-center items-center mx-auto mt-10'>
              <input
                type='text'
                name='name'
                required
                placeholder='Your Name'
                className='w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 px-3 py-4 rounded-md text-black dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400'
              />
              <input
                type='email'
                name='email'
                required
                placeholder='Your Email'
                className='w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 px-3 py-4 rounded-md text-black dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400'
              />
              <select
                name='role'
                required
                className='w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 px-3 py-5 rounded-md text-black dark:text-white'
              >
                <option value=''>I am a...</option>
                <option value='developer'>Developer</option>
                <option value='recruiter'>Recruiter</option>
                <option value='user'>Just browsing</option>
              </select>

              <button
                type='submit'
                className='cursor-pointer text-sm uppercase'
              >
                <strong className='mt-5 flex bg-blue-500 hover:bg-blue-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 px-15 py-5  text-white dark:text-black rounded-xl font-bold uppercase'>
                  Download now
                </strong>
              </button>
            </div>
          ) : (
            <div className='bg-white dark:bg-black w-full flex flex-col justify-center items-center max-w-4xl mx-auto pt-8 lg:pt-20 pb-0  text-black dark:text-white text-center'>
              <p className='text-lg bg-green-100 text-green-600 px-6 py-3 rounded-md '>
                Success! Now check your email to download the guide.
              </p>
            </div>
          )}
        </form>
      </div>
      <div className='my-10 text-center'>
        <Link
          href='/#about'
          className='text-blue-500 dark:text-yellow-500 hover:underline'
        >
          ← Back to About Me
        </Link>
      </div>
    </div>
  );
}
