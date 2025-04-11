'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function NavbarDemo() {
  const navItems = [
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Certifications',
      link: '#certifications',
    },
    {
      name: 'Testimonials',
      link: '#testimonials',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='relative w-full'>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className='flex items-center gap-4'>
            <NavbarButton
              variant='primary'
              href='https://www.linkedin.com/in/sawsimonlinn/'
              target='_blank'
            >
              Connect with me
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className='relative text-neutral-600 dark:text-neutral-300'
              >
                <span className='block'>{item.name}</span>
              </a>
            ))}
            <div className='flex w-full flex-col gap-4'>
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
              >
                Login
              </NavbarButton> */}
              <div className='text-start'>
                <a
                  href='https://www.github.com/sawsimonlinn'
                  target='_blank'
                  className='mr-4'
                >
                  <FaGithub className='inline-block text-neutral-600 dark:text-neutral-300 h-5 w-5' />
                </a>
                <a
                  href='https://www.linkedin.com/in/sawsimonlinn/'
                  target='_blank'
                  className='mr-4'
                >
                  <FaLinkedin className='inline-block text-neutral-600 dark:text-neutral-300 h-5 w-5' />
                </a>
                <a
                  href='https://www.instagram.com/sawsimonlinn/'
                  target='_blank'
                  className='mr-4'
                >
                  <FaInstagram className='inline-block text-neutral-600 dark:text-neutral-300 h-5 w-5' />
                </a>
              </div>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
                href='https://www.linkedin.com/in/sawsimonlinn/'
                target='_blank'
              >
                Connect with me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
