'use client';
import React, { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa6';
import { CgFigma } from 'react-icons/cg';
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  SiPostman,
  SiNetlify,
  SiSanity,
  SiAppwrite,
  SiSentry,
} from 'react-icons/si';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const words = [
    { text: 'Software' },
    { text: 'Developer' },
    { text: 'with' },
    { text: 'Powerful', className: 'text-blue-500 dark:text-blue-500' },
    { text: 'Intent.' },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
        id='about'
        className='w-full px-10 py-20 bg-white text-black dark:bg-transparent dark:text-white transition-colors duration-300'
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center h-[10rem]'
        >
          <p className='text-neutral-600 dark:text-neutral-200 text-xs sm:text-base'>
            Turning ideas into clean digital realities
          </p>
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-6'>
              About <span className='text-blue-500'>Me</span>
            </h2>
            <p className='text-base leading-relaxed text-gray-800 dark:text-gray-300 mb-4'>
              I’m{' '}
              <span className='text-slate-900 dark:text-slate-200 font-extrabold'>
                Saw Simon Linn,
              </span>{' '}
              a former graphic designer turned full-stack developer with a
              passion for both creativity and code. My journey began in Myanmar,
              where I spent over 7 years designing graphics and editing
              videos—before life led me to the U.S., where I rebuilt everything
              from the ground up.
            </p>
            <p className='text-base leading-relaxed text-gray-800 dark:text-gray-300 mb-4'>
              By day,{' '}
              <span className='text-slate-900 dark:text-slate-200 font-extrabold'>
                I work full-time
              </span>{' '}
              to support my family. By night, I code with heart. I completed the
              TripleTen Software Engineering program, where I built dozens of
              frontend and backend projects using real-world tools and team
              workflows.
            </p>
            <p className='text-base leading-relaxed text-gray-800 dark:text-gray-300'>
              <span className='text-slate-900 dark:text-slate-200 font-extrabold'>
                Design taught me
              </span>{' '}
              to see the world differently. Coding gave me the tools to shape
              it. Now I bring both together to create digital experiences that
              are beautiful, responsive, and meaningful.
            </p>
            <div className='mt-6'>
              <Link
                href='/get-resume'
                className='inline-block px-6 py-2 border border-black/20 rounded-md text-sm font-bold text-white bg-white/10 hover:bg-white/20 dark:border-white/10 dark:text-white transition-all duration-200'
              >
                <button className='flex items-center gap-2  text-gray-500 dark:text-gray-400 transition'>
                  <FaRegNewspaper className='text-gray-500 dark:text-gray-300' />
                  Download My Resume
                </button>
              </Link>
              <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
                Or feel free to{' '}
                <a
                  href='#contact'
                  className='underline hover:text-black dark:hover:text-white'
                >
                  reach out
                </a>{' '}
                if you’d like to work together.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-6'>
              Skills I Work <span className='text-blue-500'>With</span>
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4'>
                <div className='bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-lg backdrop-blur-sm transition-colors duration-300'>
                  <p className='text-sm text-gray-800 dark:text-gray-200 font-semibold'>
                    Frontend
                    <strong className='flex justify-between mt-2'>
                      <FaReact className='text-cyan-300' />
                      <RiNextjsFill className='text-black dark:text-gray-300' />
                      <RiJavascriptFill className='text-yellow-300' />
                      <BiLogoTypescript className='text-blue-400' />
                      <FaHtml5 className='text-orange-500' />
                      <FaCss3 className='text-blue-500' />
                      <RiTailwindCssFill className='text-teal-400' />
                    </strong>
                  </p>
                  <ul className='text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML & CSS</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                <div className='bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                  <p className='text-sm text-gray-800 dark:text-gray-200 font-semibold'>
                    Backend
                  </p>
                  <ul className='text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                  <p className='text-sm text-gray-800 dark:text-gray-200 font-semibold'>
                    Tools
                    <strong className='flex justify-between mt-2'>
                      <FaGithub className='text-black dark:text-gray-300' />
                      <CgFigma className='text-pink-400' />
                      <SiPostman className='text-orange-500' />
                      <SiNetlify className='text-green-400' />
                      <SiSanity className='text-purple-500' />
                      <SiAppwrite className='text-blue-500' />
                      <SiSentry className='text-red-400' />
                    </strong>
                  </p>
                  <ul className='text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                    <li>Git & GitHub</li>
                    <li>Figma</li>
                    <li>Postman</li>
                    <li>Vercel & Netlify</li>
                    <li>Sanity.io</li>
                    <li>Appwrite.io</li>
                    <li>Sentry.io</li>
                  </ul>
                </div>

                <div className='bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                  <p className='text-sm text-gray-800 dark:text-gray-200 font-semibold'>
                    Other
                  </p>
                  <ul className='text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                    <li>Responsive Design</li>
                    <li>UI/UX Thinking</li>
                    <li>Agile Workflow</li>
                    <li>Video Editing</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
