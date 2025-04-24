'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import Image from 'next/image';

import project2 from '@/public/project_2.png';
import project5 from '@/public/project_5.png';
import project7 from '@/public/project_7.png';
import project6 from '@/public/project_6.png';

export function Experience() {
  const [active, setActive] = useState<
    (typeof experienceCards)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
        id='experience'
        className='w-full px-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300'
      >
        <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold'
          >
            Experience That Shaped My{' '}
            <span className='text-blue-500'>Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-neutral-700 mb-10 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'
          >
            From hands-on projects to real-world collaboration, each role
            sharpened my skills and deepened my passion for building meaningful
            digital products.
          </motion.p>
          <AnimatePresence>
            {active && typeof active === 'object' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 bg-black/20 h-full w-full z-10'
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === 'object' ? (
              <div className='fixed inset-0  grid place-items-center z-[100]'>
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className='w-full max-w-[800px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden'
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <Image
                      width={400}
                      height={300}
                      src={active.src}
                      alt={active.title}
                      className='w-full h-full  sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top'
                    />
                  </motion.div>

                  <div>
                    <div className='flex justify-between items-center p-4'>
                      <div className=''>
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className='font-medium text-neutral-700 dark:text-neutral-200 text-base'
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className='text-neutral-600 dark:text-neutral-400 text-base'
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.ctaLink}
                        target='_blank'
                        className='px-4 flex items-center text-center py-3 text-sm font-bold rounded bg-blue-500 text-white'
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>
                    <div className='pt-4 relative px-4'>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
                      >
                        {typeof active.content === 'function'
                          ? active.content()
                          : active.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          <ul className='max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4'>
            {experienceCards.map((card, index) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className='p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg cursor-pointer'
              >
                <div className='flex gap-4 flex-col w-full'>
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      width={400}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className='h-60 w-full  rounded-lg object-cover object-top'
                    />
                  </motion.div>
                  <div className='flex justify-center items-center flex-col'>
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className='font-bold text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base lg:text-xl'
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className='text-neutral-600 dark:text-neutral-400 text-center text-base'
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </motion.section>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};

const experienceCards = [
  {
    title: 'WTWR (Weather-to-Wear) – Bootcamp Project',
    description: 'Created a clothing recommendation app based on weather data.',
    src: project2,
    ctaText: 'Check It Out',
    ctaLink: 'https://wtwrapp.jumpingcrab.com/',
    content: () => (
      <>
        <p className='mb-2'>
          Connecting the OpenWeather API and building logic to recommend outfits
          based on real-time data was tricky but fun.
        </p>
        <ul className='list-disc list-inside space-y-1'>
          <li>Fetched and displayed weather data using OpenWeather API</li>
          <li>Built smart outfit recommendation logic by temperature</li>
          <li>Created reusable components for clothing cards and modals</li>
          <li>Styled with Flexbox, CSS Grid, and responsive design</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Portfolio Site – Personal Project',
    description:
      'Built and deployed a custom developer portfolio using Next.js and Tailwind CSS.',
    src: project5,
    ctaText: 'See Portfolio',
    ctaLink: 'https://www.sawsimonlinn.com/',
    content: () => (
      <>
        <p className='mb-2'>
          One challenge was creating a custom resume request flow that filters
          spam and only sends resumes to real users.
        </p>
        <ul className='list-disc list-inside space-y-1'>
          <li>Designed and developed with Next.js, Tailwind, Framer Motion</li>
          <li>Added theme switching and dynamic routes with project pages</li>
          <li>Built a contact form that sends resumes via EmailJS</li>
          <li>Fully responsive and optimized for SEO</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Team Lead – Eco Challenge App',
    description:
      'Planned, designed, and developed a web app to promote eco-friendly habits.',
    src: project7,
    ctaText: 'Explore App',
    ctaLink: 'https://ecochallengeapp.com/',
    content: () => (
      <>
        <p className='mb-2'>
          It was hard to manage time while handling both design and backend
          tasks, but it taught me full-stack problem-solving under pressure.
        </p>
        <ul className='list-disc list-inside space-y-1'>
          <li>Led the team and planned feature roadmap</li>
          <li>Created Figma design and implemented frontend + backend</li>
          <li>Tracked user progress with custom JavaScript logic</li>
          <li>Built with Node.js, Express, MongoDB</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Frontend Developer – Drivio',
    description:
      'Developed a sleek UI for a vehicle rental web app using React and Tailwind.',
    src: project6,
    ctaText: 'View Project',
    ctaLink: 'https://drivio.sawsimonlinn.com/',
    content: () => (
      <>
        <p className='mb-2'>
          The biggest challenge was building a dynamic and responsive layout
          that adapts across devices, while integrating JSON-based mock data
          without needing a backend.
        </p>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            Built a fully responsive frontend using React and Tailwind CSS
          </li>
          <li>Displayed rental car listings dynamically from JSON data</li>
          <li>Created reusable UI components for vehicle cards and filters</li>
          <li>Used Framer Motion for smooth transitions and interactivity</li>
        </ul>
      </>
    ),
  },
];
