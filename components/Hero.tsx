import { cn } from '@/lib/utils';
import React from 'react';
import { BackgroundLines } from '@/components/ui/background-lines';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { HoverBorderGradientDemo } from '@/components/HoverBorderGradientDemo';

export function Hero() {
  return (
    <div className='relative flex h-[40rem] md:h-screen w-full items-center justify-center bg-white dark:bg-black'>
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
      <BackgroundLines className='md:-top-15 -top-5 relative flex items-center justify-center w-full flex-col px-4 h-[60rem] md:h-svh'>
        <p className='max-w-xl mx-auto text-xs md:text-sm text-neutral-700 uppercase dark:text-neutral-300 text-center font-bold'>
          Created with Next.js & Aceternity UI
        </p>
        <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-6 md:py-6 relative z-20 font-bold tracking-tight'>
          Saw Simon Linn, <br />
          <ContainerTextFlip
            words={['Frontend', 'React', 'Next.js', 'JavaScript']}
            className='text-3xl me-2 md:text-4xl lg:text-7xl text-neutral-300 dark:text-white-300'
          />
          Developer.
        </h2>
        <p className='max-w-2xl mx-auto text-sm md:text-xl text-neutral-700 dark:text-neutral-200 text-center  '>
          A TripleTen graduate from California, specializing in building modern,
          user-friendly websites and creating responsive web designs.
        </p>
        <HoverBorderGradientDemo />
      </BackgroundLines>
    </div>
  );
}
