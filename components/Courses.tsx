'use client';

import React, { useEffect, useState } from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import Link from 'next/link';
import Certificate1 from '@/public/tripleten.png';
import Certificate2 from '@/public/jsmastery.png';
import Certificate3 from '@/public/jonas.png';
import Certificate4 from '@/public/angela-yu.png';
import Certificate5 from '@/public/react-front-to-back.png';
import BrowserMockup from '@/components/BrowserMockup';
import { motion } from 'framer-motion';

const content = [
  {
    title: 'TripleTen Software Engineering Bootcamp',
    description:
      'Completed an intensive, hands-on software engineering program focused on real-world, full-stack web development. Gained deep experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Developed and deployed full-stack applications, worked on group projects, participated in code jams, and followed agile workflows. The bootcamp emphasized problem-solving, collaboration, and writing clean, scalable code.',
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src={Certificate1}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='TripleTen Certificate'
        />
      </div>
    ),
  },
  {
    title: 'Next.js Developer Course (JavaScript Mastery)',
    description:
      'Learned how to build fast, SEO-friendly, and scalable web applications using Next.js. Covered key concepts like server-side rendering (SSR), static site generation (SSG), dynamic routing, API routes, and deployment using platforms like Vercel. Built real-world projects, explored file-based routing, and integrated external data sources to deliver a production-ready app experience.',
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src={Certificate2}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='JavaScript Mastery Certificate'
        />
      </div>
    ),
  },
  {
    title: 'The Complete JavaScript Course 2025: From Zero to Expert! (Udemy)',
    description:
      'Mastered modern JavaScript from the ground up, including ES6+ features, DOM manipulation, object-oriented programming, asynchronous JavaScript (promises, async/await), and functional programming principles. Completed multiple real-world projects, such as a budgeting app and a modern web app using modules and APIs, to reinforce concepts and improve coding confidence.',
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src={Certificate3}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='JavaScript Course Certificate'
        />
      </div>
    ),
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp (Udemy)',
    description:
      'Covered both frontend and backend web development using technologies like HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and RESTful APIs. Built dynamic web applications and deployed them to the cloud. Gained a solid understanding of how to structure full-stack projects, handle user authentication, and connect frontend with backend services using industry best practices.',
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src={Certificate4}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='Full-Stack Bootcamp Certificate'
        />
      </div>
    ),
  },
  {
    title: 'React Front To Back (Udemy – Traversy Media)',
    description:
      "Focused on building modern, fully responsive React applications using the latest practices such as hooks, context API, and React Router. Projects included a task tracker, GitHub finder, and more. Learned state management, API integration, and how to structure scalable components. This course helped improve understanding of React's ecosystem and real-world app architecture.",
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src={Certificate5}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='React Course Certificate'
        />
      </div>
    ),
  },
];

const Courses = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <>
      <button
        onClick={() => setIsDark(!isDark)}
        className='fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md shadow-md transition'
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
        id='certifications'
        className='w-full px-4 pb-20 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300'
      >
        <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
          <h2 className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl'>
            Courses & Certificates
          </h2>
          <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'>
            A collection of hands-on courses and bootcamps that shaped my
            full-stack journey—from fundamentals to real-world projects.
          </p>
        </div>

        <BrowserMockup>
          <div className='mx-auto'>
            <StickyScroll content={content} />
          </div>
        </BrowserMockup>
      </motion.section>
    </>
  );
};

export default Courses;
