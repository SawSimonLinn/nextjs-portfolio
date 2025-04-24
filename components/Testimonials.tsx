'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';

export function Testimonials() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
        id='testimonials'
        className='h-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] pb-10 items-center justify-center relative overflow-hidden'
      >
        <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
          <h2 className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold'>
            Real Words, Real <span className='text-blue-500'>Impact</span>
          </h2>
          <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'>
            I believe in teamwork, trust, and building together. These kind
            words mean the world to me.
          </p>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </motion.section>
    </>
  );
}

export const testimonials = [
  {
    quote:
      'Simon’s consistency and calm problem-solving energy made our entire sprint smooth. He’s someone you want on your team.',
    name: 'Thiri Htun',
    title: 'Frontend Developer, Yangon Tech Circle',
  },
  {
    quote:
      'His attention to UI detail and responsiveness is top-notch. Simon takes design seriously and it shows.',
    name: 'Aung Ko Latt',
    title: 'Product Designer, DevBridge Myanmar',
  },
  {
    quote:
      'I watched Simon grow as a developer and a leader. He supports his team and always brings positive energy.',
    name: 'Nandar Moe',
    title: 'Project Manager, Tech Wave Co.',
  },
  {
    quote:
      'Simon’s Git skills and team workflow understanding are excellent. He kept our repo clean and everyone on track.',
    name: 'Myo Min Htut',
    title: 'Backend Engineer, CodeStream Myanmar',
  },
  {
    quote:
      'Every time I work with Simon, I’m reminded of his creativity and dedication. He’s not just skilled—he’s passionate.',
    name: 'Ei Mon Kyaing',
    title: 'UX Specialist, Creative Flow',
  },
];
