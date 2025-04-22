'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundClasses = [
    'bg-white dark:bg-black',
    'bg-blue-100 dark:bg-slate-800',
    'bg-yellow-100 dark:bg-slate-900',
    'bg-orange-100  dark:bg-neutral-900',
    'bg-purple-100 dark:bg-red-900',
    'bg-indigo-100 dark:bg-slate-900',
  ];

  const gradientClasses = [
    'bg-gradient-to-br from-cyan-500 to-emerald-500',
    'bg-gradient-to-br from-pink-500 to-indigo-500',
    'bg-gradient-to-br from-orange-500 to-yellow-500',
    'bg-gradient-to-br from-blue-500 to-purple-500',
  ];

  const [backgroundClass, setBackgroundClass] = useState(backgroundClasses[0]);
  const [gradientClass, setGradientClass] = useState(gradientClasses[0]);

  useEffect(() => {
    setBackgroundClass(
      backgroundClasses[activeCard % backgroundClasses.length]
    );
    setGradientClass(gradientClasses[activeCard % gradientClasses.length]);
  }, [activeCard]);

  return (
    <motion.div
      className={cn(
        'relative flex h-[25rem] md:h-[30rem] justify-center space-x-10 overflow-y-auto rounded-xl lg:p-10 md:p-8 p-4',
        backgroundClass
      )}
      ref={ref}
    >
      <div className='relative flex items-start'>
        <div className='max-w-2xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold text-black  dark:text-slate-100'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg mt-10 max-w-sm text-black  dark:text-slate-300'
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <div
        className={cn(
          'sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block',
          gradientClass,
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
