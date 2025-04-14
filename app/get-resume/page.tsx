'use client';

import { useState } from 'react';

export default function GetResumePage() {
  const [submitted, setSubmitted] = useState(false);

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

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('role', role);

    try {
      const response = await fetch('https://formspree.io/f/xkgjylop', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        // Trigger download
        const a = document.createElement('a');
        a.href = '/resume.pdf';
        a.download = 'resume.pdf';
        a.click();

        setSubmitted(true);
        setTimeout(() => {
          window.location.href = '/thanks';
        }, 800);
      } else {
        alert('Oops! Something went wrong 😢');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900'>
      <div className='w-full flex flex-col lg:flex-row justify-center items-center bg-white dark:bg-black py-40 lg:py-50  px-6'>
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
          <p className='my-2 text-lg md:text-xl dark:text-white text-black '>
            100+ developers and recruiters already did—now it’s your turn. Peek
            inside to see the skills, passion, and pixel-perfect magic I bring
            to every project.
          </p>
          <a
            href='#download'
            className='inline-block mt-8 bg-blue-500 hover:bg-blue-400 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-white dark:text-black py-5 px-20 text-sm font-bold uppercase rounded-xl  transition cursor-pointer'
          >
            Download now
          </a>
        </div>
      </div>

      <div className='w-full flex items-center justify-center my-20 bg-neutral-200 dark:bg-neutral-900 px-4 py-16'>
        <form
          id='download'
          onSubmit={handleSubmit}
          className='bg-white dark:bg-black w-full flex flex-col justify-center items-center max-w-4xl mx-auto p-10 lg:py-25 lg:px-40 rounded-lg shadow-md space-y-5 text-black dark:text-white'
        >
          <h2 className='text-3xl md:text-4xl dark:text-white text-black font-bold text-center mb-4'>
            Before Downloading My Resume
          </h2>
          <p className='text-center dark:text-white text-blue-400 text-sm'>
            Quick peek at my journey & skills.
          </p>

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
            className='w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 px-3 py-4 rounded-md text-black dark:text-white'
          >
            <option value=''>I am a...</option>
            <option value='developer'>Developer</option>
            <option value='recruiter'>Recruiter</option>
            <option value='user'>Just browsing</option>
          </select>

          <strong className='items-center mt-5 flex justify-center px-20 w-fit bg-blue-500 hover:bg-blue-400 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-white dark:text-black hover:text-neutral-900 hover:border-neutral-900 py-4 rounded-xl font-bold uppercase'>
            <button type='submit' className='cursor-pointer uppercase'>
              Download now
            </button>
          </strong>
        </form>
      </div>
    </div>
  );
}
