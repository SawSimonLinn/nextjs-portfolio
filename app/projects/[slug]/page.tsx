'use client';

import { projects } from '@/data/projects';
import { notFound, useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  if (!project) return notFound();

  return (
    <>
      <button
        onClick={() => setIsDark(!isDark)}
        className='fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md shadow-md transition'
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='relative flex h-full w-full items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-300'
      >
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:40px_40px]',
            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='z-10 px-6 py-20'
        >
          <div className='max-w-5xl mx-auto space-y-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center'
            >
              <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className='rounded-lg object-cover w-full h-auto'
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='text-lg text-gray-800 dark:text-gray-300'
            >
              {project.description}
            </motion.p>

            <ul className='list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1'>
              {project.bulletPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>

            <div>
              <h2 className='text-2xl font-semibold'>Skills & Technologies</h2>
              <div className='flex flex-wrap gap-3 text-sm text-white dark:text-white/80 mt-2'>
                {project.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className='bg-white/10 dark:bg-white/10 px-3 py-1 rounded'
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-semibold'>Techniques & Practices</h2>
              <ul className='list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mt-2'>
                {project.techniques.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {t}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className='text-2xl font-semibold mb-2'>Project Demo</h2>
              <div className='aspect-video w-full'>
                <iframe
                  src={project.video}
                  title='Project demo'
                  className='w-full h-full rounded-lg'
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className='flex gap-4 mt-6'>
              <Link
                href={project.github}
                target='_blank'
                className='bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:bg-white/90 hover:text-black transition '
              >
                View GitHub
              </Link>
              <Link
                href={project.demo}
                target='_blank'
                className='border border-white  text-black dark:text-white px-4 py-2 rounded hover:bg-white hover:border-black transition'
              >
                Live Demo
              </Link>
            </div>

            <div className='mt-10 text-center'>
              <Link href='/' className='text-blue-500 hover:underline'>
                ← Back to Projects
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
