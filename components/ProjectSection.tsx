'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { HoverBorderGradientDemo } from './HoverBorderGradientDemo';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false }}
      id='projects'
      className='w-full px-4 bg-black text-white'
    >
      <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl'
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-neutral-700 mb-10 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'
        >
          A curated list of my favourite builds — combining frontend charm with
          backend brains.
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className='rounded-[20px] max-w-sm bg-white dark:bg-zinc-900'>
                <div className='bg-white/5 p-4 rounded-lg shadow-sm flex flex-col h-auto justify-between'>
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className='w-full h-60 object-cover rounded-md mb-4'
                    />
                  </Link>
                  <div className='text-left'>
                    <div className='flex justify-between'>
                      <h3 className='text-lg font-semibold'>{project.title}</h3>
                      <span className='text-sm text-blue-400 mt-1'>
                        {project.type}
                      </span>
                    </div>
                    <p className='text-sm text-gray-300 my-3'>
                      {project.description}
                    </p>
                    <div className='flex gap-2 text-lg text-white/70 mb-4'>
                      {project.icons.map((Icon, i) => (
                        <Icon
                          key={`${project.slug}-icon-${i}`}
                          className='h-5 w-5 text-white/70'
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-2 mt-auto'>
                    <a
                      href={project.github}
                      target='_blank'
                      className='bg-white text-black px-7 py-2 rounded text-sm flex items-center justify-center gap-2 font-medium hover:bg-white/80 transition'
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target='_blank'
                      className='bg-transparent border border-white flex items-center justify-center gap-2 px-7 py-2 rounded text-sm hover:bg-white hover:text-black transition'
                    >
                      <FaExternalLinkAlt className='text-xs' />
                      Demo
                    </a>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        <div className='mt-5'>
          <button onClick={() => setShowAll(!showAll)}>
            <HoverBorderGradientDemo
              text={showAll ? 'Show Less' : 'Show More'}
            />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
