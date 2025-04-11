import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaNodeJs,
  FaGitSquare,
} from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import {
  SiPostman,
  SiVercel,
  SiSanity,
  SiNetlify,
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiSentry,
} from 'react-icons/si';

import project1 from '@/public/project_1.png';
import project2 from '@/public/project_2.png';
import project3 from '@/public/project_3.png';
import project4 from '@/public/project_4.png';
import project5 from '@/public/project_5.png';
import project6 from '@/public/project_6.png';
import project7 from '@/public/project_7.png';
import project8 from '@/public/project_8.png';
import project9 from '@/public/project_9.png';

export const projects = [
  {
    id: 1,
    slug: 'news-explorer',
    title: 'News Explorer',
    image: project1,
    type: 'Frontend',
    description:
      'A React web app for searching the latest news and saving articles, featuring real-time updates via API integration.',
    bulletPoints: [
      'Real-time news search with API integration',
      'User-authenticated article saving system',
      'Responsive layout for all screen sizes',
      'Search functionality with error handling',
      'Styled with custom CSS and component layout',
    ],
    skills: ['React', 'JavaScript', 'API', 'HTML', 'CSS', 'Figma'],
    techniques: [
      'API data handling and transformation',
      'State management for saved articles',
      'Responsive design principles',
      'Project structure and modularization',
    ],
    icons: [
      FaReact,
      RiJavascriptFill,
      TbApi,
      CgFigma,
      FaHtml5,
      FaCss3,
      FaGitSquare,
      FaGithub,
    ],
    github: 'https://github.com/SawSimonLinn/se_project_newsexplorer',
    demo: 'https://sawsimonlinn.github.io/se_project_newsexplorer/',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 2,
    slug: 'wtwr',
    title: 'WTWR (What to Wear)',
    image: project2,
    type: 'Fullstack',
    description:
      'A weather-based clothing recommendation app with authentication and item management functionality.',
    bulletPoints: [
      'User login and authentication with token system',
      'Live weather API with outfit suggestions',
      'Clothing item CRUD system',
      'Interactive modals and reusable components',
      'Fullstack logic with MongoDB and Express',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma', 'CSS'],
    techniques: [
      'Fullstack development and route handling',
      'Secure authentication and token storage',
      'Custom component creation and reuse',
      'User experience enhancements with modals',
    ],
    icons: [
      FaReact,
      RiJavascriptFill,
      TbApi,
      CgFigma,
      FaNodeJs,
      SiMongodb,
      SiExpress,
      SiPostman,
      FaHtml5,
      FaCss3,
    ],
    github: 'https://github.com/SawSimonLinn/se_project_react',
    demo: 'https://wtwrapp.jumpingcrab.com/',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 3,
    slug: 'yc-directory',
    title: 'YC Directory',
    image: project3,
    type: 'Frontend',
    description:
      'A directory-style listing app built with Sanity CMS and styled in Tailwind CSS.',
    bulletPoints: [
      'Data-driven directory using Sanity backend',
      'Next.js dynamic routing and SSR',
      'Search and filter UI for company listings',
      'Responsive grid layout with animations',
      'Deployed with Vercel + analytics tracking',
    ],
    skills: ['Next.js', 'Sanity', 'JavaScript', 'Tailwind', 'Figma', 'Vercel'],
    techniques: [
      'CMS integration and data fetching',
      'Filtering and client-side interactivity',
      'Deployment and version control',
      'Motion animations for user engagement',
    ],
    icons: [
      FaReact,
      RiNextjsFill,
      RiJavascriptFill,
      RiTailwindCssFill,
      TbApi,
      CgFigma,
      SiVercel,
      SiSanity,
      SiSentry,
    ],
    github: 'https://github.com/SawSimonLinn/yc_directory',
    demo: 'https://yc-directory-ten-nu.vercel.app/',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 4,
    slug: 'award-winning-website',
    title: 'Award Winning Website',
    image: project4,
    type: 'Frontend',
    description:
      'A modern, responsive website built with React and Vite—clean design, fast performance, and smooth dev experience.',
    bulletPoints: [
      'Minimalistic layout with animated scroll effects',
      'Vite-powered React template setup',
      'Fast load time and optimized bundle',
      'Mobile-first responsive design',
      'Component-based design system',
    ],
    skills: ['React', 'Vite', 'HTML', 'CSS', 'TypeScript'],
    techniques: [
      'Performance-first build pipeline',
      'Reusable components and utility classes',
      'Accessible and scalable markup',
      'Custom scroll and animation hooks',
    ],
    icons: [
      FaReact,
      RiNextjsFill,
      RiJavascriptFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      FaHtml5,
      FaCss3,
    ],
    github: 'https://github.com/SawSimonLinn/jsm_award-winning-website',
    demo: 'https://sawsimonlinn.xyz/',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 5,
    slug: 'modern-nextjs-portfolio',
    title: 'Modern Next.js Portfolio',
    image: project5,
    type: 'Frontend',
    description:
      'A clean and responsive developer portfolio built with Next.js and Tailwind CSS, showcasing projects, skills, and testimonials.',
    bulletPoints: [
      'Multi-section layout with scroll snapping',
      'Theme switcher with light/dark mode',
      'Dynamic project routing and animations',
      'Testimonial section with motion effects',
      'Fully responsive with mobile optimizations',
    ],
    skills: ['Next.js', 'Tailwind', 'TypeScript', 'Framer Motion'],
    techniques: [
      'Server-side rendering and routing',
      'Dark/light theme toggling',
      'Framer Motion animations',
      'Dynamic content rendering from JSON',
    ],
    icons: [
      FaReact,
      RiNextjsFill,
      RiJavascriptFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      FaHtml5,
      FaCss3,
    ],
    github: 'https://github.com/SawSimonLinn/nextjs-portfolio',
    demo: 'https://ecochallengeapp.com/',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 6,
    slug: 'jsm-movie-app',
    title: 'JSM Movie App',
    type: 'Frontend',
    description:
      'JSM Movie App is a modern React-based movie explorer that uses the TMDB API for real-time data, styled with Tailwind CSS, and powered by Appwrite.',
    image: project6,
    bulletPoints: [
      'Real-time movie data from TMDB API',
      'User authentication with Appwrite',
      'Responsive design with Tailwind CSS',
      'Dynamic routing and state management',
      'Interactive UI with custom components',
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Appwrite', 'TMDB API'],
    techniques: [
      'API data fetching and state management',
      'User authentication and session handling',
      'Responsive design principles',
      'Component-based architecture',
    ],
    icons: [
      FaReact,
      RiNextjsFill,
      RiJavascriptFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      TbApi,
      CgFigma,
      FaHtml5,
      FaCss3,
      SiNetlify,
      SiAppwrite,
    ],
    demo: 'https://simonlinn.com/',
    github: 'https://github.com/SawSimonLinn/jsm_movie_app',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 7,
    slug: 'eco-challenge-web-app',
    title: 'Eco Challenge Web App',
    type: 'Fullstack',
    description:
      'Eco Challenge is a web application designed to help users achieve their environmental goals by completing daily challenges.',
    bulletPoints: [
      'User authentication and profile management',
      'Daily challenge tracking and progress updates',
      'Interactive challenge completion system',
      'Responsive design with Tailwind CSS',
      'API integration with Node.js and MongoDB',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Figma'],
    techniques: [
      'Fullstack development with RESTful APIs',
      'User authentication and session management',
      'Responsive design principles',
      'Component-based architecture',
    ],
    image: project7,
    icons: [
      RiJavascriptFill,
      FaHtml5,
      FaCss3,
      FaNodeJs,
      SiMongodb,
      SiExpress,
      SiPostman,
      TbApi,
      CgFigma,
      SiVercel,
    ],
    demo: 'https://ecochallengeapp.com/',
    github: 'https://github.com/SawSimonLinn/eco-challenge',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 8,
    slug: 'around-the-us',
    title: 'Around the U.S.',
    type: 'Frontend',
    description:
      'Around The U.S. is a JavaScript (OOP) web app with interactive features, dynamic content updates, and a modular, maintainable code structure.',
    bulletPoints: [
      'Interactive map with location markers',
      'Dynamic content updates with JavaScript',
      'Modular code structure for maintainability',
      'Responsive design with custom CSS',
      'User-friendly interface with smooth animations',
    ],
    skills: ['JavaScript', 'HTML', 'CSS', 'OOP', 'Figma'],
    techniques: [
      'Object-oriented programming principles',
      'Dynamic DOM manipulation',
      'Responsive design techniques',
      'Modular code organization',
    ],
    image: project8,
    icons: [RiJavascriptFill, FaHtml5, FaCss3, TbApi, CgFigma, SiVercel],
    demo: 'https://sawsimonlinn.github.io/se_project_aroundtheus/',
    github: 'https://github.com/SawSimonLinn/se_project_aroundtheus',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
  {
    id: 9,
    slug: 'fake-data-generator',
    title: 'Fake Data Generator',
    type: 'Frontend',
    description:
      '    A modern Fake Data Generator that allows users to generate random fake data in multiple formats (JSON, HTML, JavaScript, TypeScript, Python, CSV, SQL).',
    bulletPoints: [
      'Multiple data formats supported: JSON, HTML, JavaScript, TypeScript, Python, CSV, SQL',
      'User-friendly interface with real-time data generation',
      'Responsive design with Tailwind CSS',
      'Customizable data fields and types',
      'Interactive modals for data preview',
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
    techniques: [
      'Dynamic data generation and formatting',
      'Responsive design principles',
      'Interactive UI components',
      'Modular code organization',
    ],
    image: project9,
    icons: [RiJavascriptFill, FaHtml5, FaCss3, TbApi, CgFigma, SiVercel],
    demo: 'https://sawsimonlinn.github.io/fake_data_generator/',
    github: 'https://github.com/SawSimonLinn/fake_data_generator',
    video:
      'https://drive.google.com/file/d/1Q-B99oZBSpz23pW0CAN2eK8cf1Me_lqm/view?usp=drive_link',
  },
];
