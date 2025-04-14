'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center bg-white text-black dark:bg-black dark:text-white px-6 text-center'>
      <div className='max-w-lg'>
        <h1 className='text-4xl font-bold mb-4'>Thank You 💌</h1>
        <p className='text-lg mb-6'>
          Your resume download is on the way! Appreciate your interest — you're
          one step closer to something amazing ✨
        </p>
        <Link
          href='/'
          className='inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md hover:opacity-90 transition font-medium'
        >
          Back to Home
        </Link>
      </div>
      <span className='text-sm text-gray-500 dark:text-gray-400 mt-10'>
        © {new Date().getFullYear()} Saw Simon Linn
      </span>
    </section>
  );
}
