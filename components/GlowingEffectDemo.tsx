'use client';

import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaCertificate } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaGit } from 'react-icons/fa6';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';

export function GlowingEffectDemo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <>
      <section className='pb-30 bg-white text-black dark:bg-transparent dark:text-white transition-colors duration-300'>
        <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold'
          >
            What I Bring to the <span className='text-blue-500'>Table</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'
          >
            A quick glimpse into my development journey—combining design,
            frontend, backend, and real-world teamwork. Every skill, every
            course, and every project adds to how I build beautiful, functional
            experiences.
          </motion.p>
        </div>

        <ul className='grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 px-8 md:px-20'>
          {gridItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`min-h-[14rem] list-none ${item.area}`}
            >
              <GridItem {...item} />
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <div className='relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3'>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className='relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6'>
        <div className='relative flex flex-1 flex-col justify-between gap-3'>
          <div className='w-fit rounded-lg border border-gray-600 p-2'>
            {icon}
          </div>
          <div className='space-y-3'>
            <h3 className='pt-0.5 text-xl font-semibold font-sans md:text-2xl text-balance text-black dark:text-white'>
              {title}
            </h3>
            <h2 className='font-sans text-sm md:text-base text-black dark:text-neutral-400'>
              {description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const gridItems: GridItemProps[] = [
  {
    area: 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]',
    icon: <FaReact className='h-6 w-6 text-black dark:text-neutral-400' />,
    title: 'Frontend Focus',
    description: 'Building sleek interfaces with React, Tailwind & animations.',
  },
  {
    area: 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]',
    icon: <FaNodeJs className='h-6 w-6 text-black dark:text-neutral-400' />,
    title: 'Backend Magic',
    description: 'Creating APIs and servers with Node.js & MongoDB.',
  },
  {
    area: 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]',
    icon: (
      <SiMaterialdesignicons className='h-6 w-6 text-black dark:text-neutral-400' />
    ),
    title: 'Design to Code',
    description: 'Turning visuals into responsive UI like a cheeky pro.',
  },
  {
    area: 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]',
    icon: <FaGit className='h-6 w-6 text-black dark:text-neutral-400' />,
    title: 'Code Collaboration',
    description: 'Working with teams in code jams and Git workflows.',
  },
  {
    area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]',
    icon: (
      <FaCertificate className='h-6 w-6 text-black dark:text-neutral-400' />
    ),
    title: 'Course Collection',
    description: 'Certificates & skills from TripleTen, Udemy, & more.',
  },
];
