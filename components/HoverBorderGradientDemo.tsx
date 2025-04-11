'use client';
import React from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { FaLocationArrow } from 'react-icons/fa6';

interface HoverBorderGradientDemoProps {
  text?: string;
}

export function HoverBorderGradientDemo({
  text,
}: HoverBorderGradientDemoProps) {
  return (
    <div className='m-5 md:m-10 flex justify-center text-center'>
      <HoverBorderGradient
        containerClassName='rounded-xl  border-transparent'
        as='div'
        className='cursor-pointer dark:bg-black md:py-4 md:px-9 bg-white text-black dark:text-white flex items-center space-x-2'
      >
        <span>{text}</span>
        <FaLocationArrow />
      </HoverBorderGradient>
    </div>
  );
}
