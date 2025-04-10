'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitSquare,
  FaGithub,
  FaNodeJs,
  FaExternalLinkAlt,
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

interface Project {
  id: number;
  image: any;
  title: string;
  type: 'Frontend' | 'Backend' | 'Fullstack';
  description: string;
  icons: JSX.Element[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: project1,
    title: 'News Explorer',
    type: 'Frontend',
    description:
      'A React web app for searching the latest news and saving articles, featuring real-time updates via API integration.',
    icons: [
      <FaReact />,
      <RiJavascriptFill />,
      <TbApi />,
      <CgFigma />,
      <FaHtml5 />,
      <FaCss3 />,
      <FaGitSquare />,
      <FaGithub />,
    ],
    demo: 'https://sawsimonlinn.github.io/se_project_newsexplorer/',
    github: 'https://github.com/SawSimonLinn/se_project_newsexplorer',
  },
  {
    id: 2,
    icons: [
      <FaReact />,
      <RiJavascriptFill />,
      <TbApi />,
      <CgFigma />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiExpress />,
      <SiPostman />,
      <FaHtml5 />,
      <FaCss3 />,
    ],
    title: 'WTWR (What to Wear)',
    type: 'Fullstack ',
    description:
      'A React.js frontend project with a dynamic UI, component-based architecture, state management, and API integration.',
    image: project2,
    demo: 'https://wtwrapp.jumpingcrab.com/',
    github: 'https://github.com/SawSimonLinn/se_project_react',
  },
  // Add more projects here...
  {
    id: 3,
    icons: [
      <FaReact />,
      <RiNextjsFill />,
      <RiJavascriptFill />,
      <RiTailwindCssFill />,
      <TbApi />,
      <CgFigma />,
      <SiVercel />,
      <SiSanity />,
      <SiSentry />,
    ],
    title: 'YC Directory',
    type: 'Fullstack',
    description:
      'A React.js frontend project with a dynamic UI, component-based architecture, state management, and API integration.',
    image: project3,
    demo: 'https://yc-directory-ten-nu.vercel.app/',
    github: 'https://github.com/SawSimonLinn/yc_directory',
  },
  {
    id: 4,
    icons: [
      <FaReact />,
      <RiNextjsFill />,
      <RiJavascriptFill />,
      <BiLogoTypescript />,
      <RiTailwindCssFill />,
      <FaHtml5 />,
      <FaCss3 />,
    ],
    title: 'Award Winning Website',
    type: 'Frontend',
    description:
      'A modern, responsive website built with React and Vite—clean design, fast performance, and smooth dev experience.',
    image: project4,
    demo: 'https://sawsimonlinn.xyz/',
    github: 'https://github.com/SawSimonLinn/jsm_award-winning-website',
  },
  {
    id: 5,
    icons: [
      <FaReact />,
      <RiNextjsFill />,
      <RiJavascriptFill />,
      <BiLogoTypescript />,
      <RiTailwindCssFill />,
      <FaHtml5 />,
      <FaCss3 />,
    ],
    title: 'Modern Next.js Portfolio',
    type: 'Frontend',
    description:
      'A clean and responsive developer portfolio built with Next.js and Tailwind CSS, showcasing projects with smooth UI, dark mode, and modern design transitions.',
    image: project5,
    demo: 'https://ecochallengeapp.com/',
    github: 'https://github.com/SawSimonLinn/nextjs-portfolio',
  },
  {
    id: 6,
    icons: [
      <FaReact />,
      <RiNextjsFill />,
      <RiJavascriptFill />,
      <BiLogoTypescript />,
      <RiTailwindCssFill />,
      <TbApi />,
      <CgFigma />,
      <FaHtml5 />,
      <FaCss3 />,
      <SiNetlify />,
      <SiAppwrite />,
    ],
    title: 'JSM Movie App',
    type: 'Frontend',
    description:
      'JSM Movie App is a modern React-based movie explorer that uses the TMDB API for real-time data, styled with Tailwind CSS, and powered by Appwrite.',
    image: project6,
    demo: 'https://simonlinn.com/',
    github: 'https://github.com/SawSimonLinn/jsm_movie_app',
  },
  {
    id: 7,
    icons: [
      <RiJavascriptFill />,
      <FaHtml5 />,
      <FaCss3 />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiExpress />,
      <SiPostman />,
      <TbApi />,
      <CgFigma />,
      <SiVercel />,
    ],
    title: 'Eco Challenge Web App',
    type: 'Fullstack',
    description:
      'Eco Challenge is a web application designed to help users achieve their environmental goals by completing daily challenges.',
    image: project7,
    demo: 'https://ecochallengeapp.com/',
    github: 'https://github.com/SawSimonLinn/eco-challenge',
  },
  {
    id: 8,
    icons: [
      <RiJavascriptFill />,
      <FaHtml5 />,
      <FaCss3 />,
      <TbApi />,
      <CgFigma />,
      <SiVercel />,
    ],
    title: 'Around the U.S.',
    type: 'Frontend',
    description:
      'Around The U.S. is a JavaScript (OOP) web app with interactive features, dynamic content updates, and a modular, maintainable code structure.',
    image: project8,
    demo: 'https://sawsimonlinn.github.io/se_project_aroundtheus/',
    github: 'https://github.com/SawSimonLinn/se_project_aroundtheus',
  },
  {
    id: 9,
    icons: [
      <RiJavascriptFill />,
      <FaHtml5 />,
      <FaCss3 />,
      <TbApi />,
      <CgFigma />,
      <SiVercel />,
    ],
    title: 'Fake Data Generator',
    type: 'Frontend',
    description:
      '    A modern Fake Data Generator that allows users to generate random fake data in multiple formats (JSON, HTML, JavaScript, TypeScript, Python, CSV, SQL).',
    image: project9,
    demo: 'https://sawsimonlinn.github.io/fake_data_generator/',
    github: 'https://github.com/SawSimonLinn/fake_data_generator',
  },
];

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id='projects' className='w-full px-4 py-20 bg-black text-white'>
      <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
        <h2 className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl'>
          Featured Projects
        </h2>
        <p className='text-neutral-700 mb-10 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'>
          A curated list of my favourite builds — combining frontend charm with
          backend brains.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {visibleProjects.map(project => (
            <div
              key={project.id}
              className='bg-white/5 p-4 rounded-lg shadow-sm flex flex-col h-auto justify-between'
            >
              <Image
                src={project.image}
                alt={project.title}
                className='w-full h-60 object-cover rounded-md mb-4'
              />
              <div className='text-left'>
                <div className='flex justify-between'>
                  {' '}
                  <h3 className='text-lg font-semibold'>{project.title}</h3>
                  <span className='text-sm text-blue-400'>{project.type}</span>
                </div>
                <p className='text-sm text-gray-300 my-3'>
                  {project.description}
                </p>
                <div className='flex gap-2 text-lg text-white/70 mb-4'>
                  {project.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </div>
              <div className='flex justify-between items-center gap-2 mt-auto'>
                <a
                  href={project.github}
                  target='_blank'
                  className='bg-white text-black px-7 py-2 rounded text-sm flex items-center gap-2 font-medium hover:bg-white/80 transition'
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target='_blank'
                  className='bg-transparent border border-white flex items-center gap-2 px-7 py-2 rounded text-sm hover:bg-white hover:text-black transition'
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className='mt-10'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition'
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}
