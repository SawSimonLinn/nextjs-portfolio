import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaNodeJs,
  FaGitSquare,
} from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import {
  SiPostman,
  SiVercel,
  SiSanity,
  SiNetlify,
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiSentry,
} from "react-icons/si";

import project0 from "@/public/project_0.png";
import project0a from "@/public/project_0a.png";
import project0b from "@/public/project_0b.png";
import project0c from "@/public/project_0c.png";
import project0d from "@/public/project_0d.png";

import project1 from "@/public/project_1.png";
import project1a from "@/public/project_1a.png";
import project1b from "@/public/project_1b.png";
import project1c from "@/public/project_1c.png";

import project2 from "@/public/project_2.png";
import project2a from "@/public/project_2a.png";
import project2b from "@/public/project_2b.png";
import project2c from "@/public/project_2c.png";

import project3 from "@/public/project_3.png";
import project3a from "@/public/project_3a.png";
import project3b from "@/public/project_3b.png";
import project3c from "@/public/project_3c.png";

import project4 from "@/public/project_4.png";
import project4a from "@/public/project_4a.png";
import project4b from "@/public/project_4b.png";
import project4c from "@/public/project_4c.png";

import project5 from "@/public/project_5.png";
import project5a from "@/public/project_5a.png";
import project5b from "@/public/project_5b.png";
import project5c from "@/public/project_5c.png";
import project5d from "@/public/project_5d.png";

import project6 from "@/public/project_6.png";
import project6a from "@/public/project_6a.png";
import project6b from "@/public/project_6b.png";
import project6c from "@/public/project_6c.png";

import project7 from "@/public/project_7.png";
import project7a from "@/public/project_7a.png";
import project7b from "@/public/project_7b.png";
import project7c from "@/public/project_7c.png";

import project8 from "@/public/project_8.png";
import project8a from "@/public/project_8a.png";
import project8b from "@/public/project_8b.png";
import project8c from "@/public/project_8c.png";

import project9 from "@/public/project_9.png";
import project9a from "@/public/project_9a.png";
import project9b from "@/public/project_9b.png";
import project9c from "@/public/project_9c.png";

export const projects = [
  {
    id: 0,
    slug: "blue-bird-haus",
    title: "Blue Bird Haus",
    images: [project0, project0a, project0b, project0c, project0d],
    type: "Frontend",
    description:
      "A modern sushi restaurant website with an easy-to-use online menu, vibrant photo gallery, and admin panel for managing menu items.",
    bulletPoints: [
      "Implemented a responsive design using Next.js and Tailwind CSS",
      "Integrated a smart reservation system with seat limits, cutoff times, and waitlist functionality to optimize bookings",
      "Designed a clean, appetizing UI/UX to highlight menu items, gallery photos, and promotions",
      "Added an admin dashboard for managing menu categories, items, and gallery uploads",
      "Optimized performance, accessibility, and SEO to attract more customers and improve search rankings",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Resent",
      "CI/CD",
    ],
    techniques: [
      "Responsive design principles",
      "CMS integration and management",
      "Image optimization techniques",
      "Interactive map creation",
    ],
    icons: [
      RiNextjsFill,
      SiAppwrite,
      BiLogoTypescript,
      RiTailwindCssFill,
      CgFigma,
      FaCss3,
      FaGitSquare,
      FaGithub,
    ],
    github: "https://github.com/SawSimonLinn/se_project_bluebirdhaus",
    demo: "https://bluebirdhaus.online/",
    video: "/404",
  },
  {
    id: 1,
    slug: "news-explorer",
    title: "News Explorer",
    images: [project1, project1a, project1b, project1c],
    type: "Frontend",
    description:
      "A React web app for searching the latest news and saving articles, featuring real-time updates via API integration.",
    bulletPoints: [
      "Real-time news search with API integration",
      "User-authenticated article saving system",
      "Responsive layout for all screen sizes",
      "Search functionality with error handling",
      "Styled with custom CSS and component layout",
    ],
    skills: ["React", "JavaScript", "API", "HTML", "CSS", "Figma"],
    techniques: [
      "API data handling and transformation",
      "State management for saved articles",
      "Responsive design principles",
      "Project structure and modularization",
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
    github: "https://github.com/SawSimonLinn/se_project_newsexplorer",
    demo: "https://sawsimonlinn.github.io/se_project_newsexplorer/",
    video: "/404",
  },
  {
    id: 2,
    slug: "wtwr",
    title: "WTWR (What to Wear)",
    images: [project2, project2a, project2b, project2c],
    type: "Fullstack",
    description:
      "A weather-based clothing recommendation web app with authentication and item management functionality.",
    bulletPoints: [
      "User login and authentication with token system",
      "Live weather API with outfit suggestions",
      "Clothing item CRUD system",
      "Interactive modals and reusable components",
      "Fullstack logic with MongoDB and Express",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Figma", "CSS"],
    techniques: [
      "Fullstack development and route handling",
      "Secure authentication and token storage",
      "Custom component creation and reuse",
      "User experience enhancements with modals",
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
    github: "https://github.com/SawSimonLinn/se_project_react",
    demo: "https://wtwrapp.jumpingcrab.com/",
    video: "/404",
  },
  {
    id: 3,
    slug: "yc-directory",
    title: "YC Directory",
    images: [project3, project3a, project3b, project3c],
    type: "Frontend",
    description:
      "A directory-style start-up listing web app built with Next.js, TypeScript, Sanity CMS and styled in Tailwind CSS.",
    bulletPoints: [
      "Data-driven directory using Sanity backend",
      "Next.js dynamic routing and SSR",
      "Search and filter UI for company listings",
      "Responsive grid layout with animations",
      "Deployed with Vercel + analytics tracking",
    ],
    skills: ["Next.js", "Sanity", "JavaScript", "Tailwind", "Figma", "Vercel"],
    techniques: [
      "CMS integration and data fetching",
      "Filtering and client-side interactivity",
      "Deployment and version control",
      "Motion animations for user engagement",
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
    github: "https://github.com/SawSimonLinn/yc_directory",
    demo: "https://yc-directory.sawsimonlinn.com",
    video: "/404",
  },
  {
    id: 7,
    slug: "eco-challenge-web-app",
    title: "Eco Challenge",
    type: "Fullstack",
    description:
      "Eco Challenge is a web application designed to help users achieve their environmental goals by completing daily challenges.",
    bulletPoints: [
      "User authentication and profile management",
      "Daily challenge tracking and progress updates",
      "Interactive challenge completion system",
      "Responsive design with Tailwind CSS",
      "API integration with Node.js and MongoDB",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
    techniques: [
      "Fullstack development with RESTful APIs",
      "User authentication and session management",
      "Responsive design principles",
      "Component-based architecture",
    ],
    images: [project7, project7a, project7b, project7c],
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
    demo: "https://ecochallengeapp.com/",
    github: "https://github.com/SawSimonLinn/eco-challenge",
    video: "/404",
  },
  {
    id: 5,
    slug: "modern-nextjs-portfolio",
    title: "Modern Next.js Portfolio",
    images: [project5, project5a, project5b, project5c, project5d],
    type: "Frontend",
    description:
      "A clean and responsive developer portfolio built with Next.js and Tailwind CSS, showcasing projects, skills, and testimonials.",
    bulletPoints: [
      "Multi-section layout with scroll snapping",
      "Theme switcher with light/dark mode",
      "Dynamic project routing and animations",
      "Testimonial section with motion effects",
      "Fully responsive with mobile optimizations",
    ],
    skills: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    techniques: [
      "Server-side rendering and routing",
      "Dark/light theme toggling",
      "Framer Motion animations",
      "Dynamic content rendering from JSON",
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
    demo: "https://www.sawsimonlinn.com/",
    github: "https://github.com/SawSimonLinn/nextjs-portfolio",
    video: "/404",
  },

  {
    id: 8,
    slug: "around-the-us",
    title: "Around the U.S.",
    type: "Frontend",
    description:
      "Around The U.S. is a JavaScript (OOP) web app with interactive features, dynamic content updates, and a modular, maintainable code structure.",
    bulletPoints: [
      "Interactive map with location markers",
      "Dynamic content updates with JavaScript",
      "Modular code structure for maintainability",
      "Responsive design with custom CSS",
      "User-friendly interface with smooth animations",
    ],
    skills: ["JavaScript", "HTML", "CSS", "OOP", "Figma"],
    techniques: [
      "Object-oriented programming principles",
      "Dynamic DOM manipulation",
      "Responsive design techniques",
      "Modular code organization",
    ],
    images: [project8, project8a, project8b, project8c],
    icons: [RiJavascriptFill, FaHtml5, FaCss3, TbApi, CgFigma, SiVercel],
    demo: "https://sawsimonlinn.github.io/se_project_aroundtheus/",
    github: "https://github.com/SawSimonLinn/se_project_aroundtheus",
    video: "/404",
  },
  {
    id: 6,
    slug: "drivio-google-drive-clone",
    title: "Google Drive Clone",
    type: "Fullstack",
    description:
      "A Google Drive clone built with React, TypeScript, Tailwind CSS, and Appwrite, allowing users to upload and manage files securely.",
    images: [project6, project6a, project6b, project6c],
    bulletPoints: [
      "Built a Google Drive clone using React and TypeScript.",
      "Integrated Appwrite for file storage, authentication, and database.",
      "Implemented file upload, preview, and delete functionality.",
      "Used Tailwind CSS for responsive and modern UI design.",
      "Ensured secure access control for user files.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "OTP Verification",
    ],
    techniques: [
      "File upload and management with Appwrite storage API.",
      "Responsive design using utility-first Tailwind classes.",
      "Authentication and user sessions with Appwrite.",
      "Routing and protected routes with React Router.",
    ],
    icons: [
      RiNextjsFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      CgFigma,
      FaHtml5,
      FaCss3,
      SiAppwrite,
    ],
    demo: "https://drivio.sawsimonlinn.com",
    github: "https://github.com/SawSimonLinn/google-drive-clone",
    video: "/404",
  },

  {
    id: 4,
    slug: "award-winning-website",
    title: "Award Winning Website",
    images: [project4, project4a, project4b, project4c],
    type: "Frontend",
    description:
      "A modern, responsive website built with React and Vite—clean design, fast performance, and smooth dev experience.",
    bulletPoints: [
      "Minimalistic layout with animated scroll effects",
      "Vite-powered React template setup",
      "Fast load time and optimized bundle",
      "Mobile-first responsive design",
      "Component-based design system",
    ],
    skills: ["React", "Vite", "HTML", "CSS", "TypeScript"],
    techniques: [
      "Performance-first build pipeline",
      "Reusable components and utility classes",
      "Accessible and scalable markup",
      "Custom scroll and animation hooks",
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
    github: "https://github.com/SawSimonLinn/jsm_award-winning-website",
    demo: "https://zentry.sawsimonlinn.com",
    video: "/404",
  },
  {
    id: 9,
    slug: "jsm-movie-app",
    title: "JSM Movie App",
    type: "Frontend",
    description:
      "JSM Movie App is a modern React-based movie explorer that uses the TMDB API for real-time data, and powered by Appwrite.",
    images: [project9, project9a, project9b, project9c],
    bulletPoints: [
      "Real-time movie data from TMDB API",
      "User authentication with Appwrite",
      "Responsive design with Tailwind CSS",
      "Dynamic routing and state management",
      "Interactive UI with custom components",
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Appwrite", "TMDB API"],
    techniques: [
      "API data fetching and state management",
      "User authentication and session handling",
      "Responsive design principles",
      "Component-based architecture",
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
    demo: "https://simonlinn.com/",
    github: "https://github.com/SawSimonLinn/jsm_movie_app",
    video: "/404",
  },
];
