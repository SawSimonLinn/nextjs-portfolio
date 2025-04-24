import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className=' bg-neutral-100 dark:bg-black text-neutral-800 dark:text-neutral-200 py-8'>
        <div className='max-w-full  px-10 md:flex items-center justify-center md:justify-between'>
          <div className='text-center'>
            <p className='text-sm'>
              © {new Date().getFullYear()} Saw Simon Linn. All rights reserved.
            </p>
          </div>
          <div className='text-center'>
            <a
              href='https://www.github.com/sawsimonlinn'
              target='_blank'
              className='ml-4'
            >
              <FaGithub className='inline-block text-neutral-600 dark:text-neutral-300 h-5 w-5' />
            </a>
            <a
              href='https://www.linkedin.com/in/sawsimonlinn/'
              target='_blank'
              className='ml-4'
            >
              <FaLinkedin className='inline-block text-neutral-600 dark:text-neutral-300 h-5 w-5' />
            </a>
            <a
              href='https://www.instagram.com/sawsimonlinn/'
              target='_blank'
              className='ml-4'
            >
              <FaInstagram className='inline-block text-neutral-600 dark:text-neutral-300 h-5 w-5' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
