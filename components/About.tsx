'use client';
import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitSquare,
  FaGithub,
} from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  SiPostman,
  SiVercel,
  SiNetlify,
  SiSanity,
  SiAppwrite,
  SiSentry,
} from 'react-icons/si';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const About = () => {
  const words = [
    {
      text: 'Software',
    },
    {
      text: 'Developer',
    },
    {
      text: 'with',
    },
    {
      text: 'powerful',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'intent.',
    },
  ];
  return (
    <section id='about' className='w-full px-10 py-20 bg-black text-white'>
      <div className='flex flex-col items-center justify-center h-[10rem]  '>
        <p className='text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  '>
          Turning ideas into clean digital realities
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {/* About Text */}
        <div>
          <h2 className='text-3xl font-bold mb-6'>About Me</h2>
          <p className='text-base leading-relaxed text-gray-300 mb-4'>
            I’m{' '}
            <span className='text-slate-200 font-extrabold'>
              Saw Simon Linn,
            </span>{' '}
            a former graphic designer turned full-stack developer with a passion
            for both creativity and code. My journey began in Myanmar, where I
            spent over 7 years designing graphics and editing videos—before life
            led me to the U.S., where I rebuilt everything from the ground up.
          </p>
          <p className='text-base leading-relaxed text-gray-300 mb-4'>
            By day,{' '}
            <span className='text-slate-200 font-extrabold'>
              I work full-time
            </span>{' '}
            to support my family. By night, I code with heart. I completed the
            TripleTen Software Engineering program, where I built dozens of
            frontend and backend projects using real-world tools and team
            workflows.
          </p>
          <p className='text-base leading-relaxed text-gray-300'>
            <span className='text-slate-200 font-extrabold'>
              Design taught me
            </span>{' '}
            to see the world differently. Coding gave me the tools to shape it.
            Now I bring both together to create digital experiences that are
            beautiful, responsive, and meaningful.
          </p>
          <div className='mt-6'>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-6 py-2 border border-white/20 rounded-md text-sm font-bold text-white bg-white/10 hover:bg-white/20 transition-all duration-200'
            >
              View My Resume
            </a>
            <p className='text-sm text-gray-400 mt-2'>
              Or feel free to{' '}
              <a href='#contact' className='underline hover:text-white'>
                reach out
              </a>{' '}
              if you’d like to work together.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className='text-3xl font-bold mb-6'>Skills I Work With</h2>
          <div className='grid grid-cols-2 gap-4'>
            {/* Skill Card Group */}
            <div className='space-y-4'>
              <div className='bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                <p className='text-sm text-gray-200 font-semibold'>
                  Frontend
                  <strong className='flex justify-between mt-2'>
                    <FaReact className='text-cyan-300' />
                    <RiNextjsFill className='text-gray-300' />
                    <RiJavascriptFill className='text-yellow-300' />
                    <BiLogoTypescript className='text-blue-400' />
                    <FaHtml5 className='text-orange-500' />
                    <FaCss3 className='text-blue-500' />
                    <RiTailwindCssFill className='text-teal-400' />
                  </strong>
                </p>
                <ul className='text-sm text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML & CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className='bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                <p className='text-sm text-gray-200 font-semibold'>Backend</p>
                <ul className='text-sm text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                <p className='text-sm text-gray-200 font-semibold'>
                  Tools
                  <strong className='flex justify-between mt-2'>
                    <FaGithub className='text-gray-300' />
                    <CgFigma className='text-pink-400' />
                    <SiPostman className='text-orange-500' />
                    <SiVercel className='text-cyan-300' />
                    <SiNetlify className='text-green-400' />
                    <SiSanity className='text-purple-500' />
                    <SiAppwrite className='text-blue-500' />
                  </strong>
                </p>
                <ul className='text-sm text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                  <li>Git & GitHub</li>
                  <li>Figma</li>
                  <li>Postman</li>
                  <li>Vercel & Netlify</li>
                  <li>Sanity.io</li>
                  <li>Appwrite.io</li>
                  <li>Sentry.io</li>
                </ul>
              </div>

              <div className='bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm'>
                <p className='text-sm text-gray-200 font-semibold'>Other</p>
                <ul className='text-sm text-gray-400 mt-2 space-y-1 list-disc list-inside'>
                  <li>Responsive Design</li>
                  <li>UI/UX Thinking</li>
                  <li>Agile Workflow</li>
                  <li>Video Editing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
