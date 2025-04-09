'use client';
import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import Certificate1 from '@/public/tripleten.png';
import Certificate2 from '@/public/jsmastery.png';
import Certificate3 from '@/public/jonas.png';
import Certificate4 from '@/public/angela-yu.png';
import Certificate5 from '@/public/react-front-to-back.png';
import BrowserMockup from '@/components/BrowserMockup';
import { FaLock } from 'react-icons/fa';

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
          alt='linear board demo'
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
          alt='linear board demo'
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
          alt='linear board demo'
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
          alt='linear board demo'
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
          alt='linear board demo'
        />
      </div>
    ),
  },
];

const urlText = (
  <>
    <FaLock className='inline-block text-xs mr-2' /> www.sawsimonlinn.com
  </>
);
const Courses = () => {
  return (
    <div className=' md:max-w-full flex mx-auto justify-center px-4 py-10'>
      <BrowserMockup url={urlText}>
        <div className=' mx-auto'>
          <StickyScroll content={content} />
        </div>
      </BrowserMockup>
    </div>
  );
};

export default Courses;
