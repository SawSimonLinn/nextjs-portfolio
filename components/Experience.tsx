"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

import project2 from "@/public/freelance.png";
import project5 from "@/public/hope.png";
import project7 from "@/public/tripleten black.png";
import project6 from "@/public/iyf.png";

export function Experience() {
  const [active, setActive] = useState<
    (typeof experienceCards)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        id="experience"
        className="w-full px-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold"
          >
            Experience That Shaped My{" "}
            <span className="text-blue-500">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-700 mb-10 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center"
          >
            From hands-on projects to real-world collaboration, each role
            sharpened my skills and deepened my passion for building meaningful
            digital products.
          </motion.p>
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0  grid place-items-center z-[100]">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[800px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <Image
                      width={400}
                      height={300}
                      src={active.src}
                      alt={active.title}
                      className="w-full h-full  sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-center p-4">
                      <div className="">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-base"
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.ctaLink}
                        target="_blank"
                        className="px-4 flex items-center text-center py-3 text-sm font-bold rounded bg-blue-500 text-white"
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>
                    <div className="pt-4 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                      >
                        {typeof active.content === "function"
                          ? active.content()
                          : active.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
            {experienceCards.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                <div className="flex gap-4 flex-col w-full">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      width={400}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-60 w-full  rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex justify-center items-center flex-col">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-bold text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base lg:text-xl"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center text-base"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </motion.section>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const experienceCards = [
  {
    title: "Freelance Web Developer",
    description:
      "Developed various web applications for clients using modern technologies.",
    src: project2,
    ctaText: "Check It Out",
    ctaLink: "https://wtwrapp.jumpingcrab.com/",
    content: () => (
      <>
        <p className="mb-2">
          Designed, developed, and deployed 10+ custom websites and applications
          for diverse clients, including restaurants, clothing and fashion
          brands, music bands, and more. Delivered both static and dynamic sites
          using Next.js, React, TypeScript, Tailwind CSS, and modern backend
          services. Built responsive, high-performance, SEO-optimized solutions
          tailored to each client’s brand and goals. Managed the full
          development cycle—from requirements gathering and UI/UX design to
          deployment—ensuring timely delivery and exceptional quality.
        </p>
        <h3>Key Contributions:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Worked with clients to gather requirements and define project scope
          </li>
          <li>
            Utilized modern frameworks like React, Next.js, and Tailwind CSS
          </li>
          <li>
            Implemented responsive designs and ensured cross-browser
            compatibility
          </li>
          <li>
            Conducted code reviews and provided mentorship to junior developers
          </li>
        </ul>
        <h3>Challenges:</h3>
        <ul>
          <li>Balancing multiple projects with varying deadlines</li>
          <li>Adapting to different client requirements and workflows</li>
          <li>Troubleshooting and debugging complex issues</li>
          <li>Staying updated with the latest web development trends</li>
        </ul>
      </>
    ),
  },
  {
    title: "Fullstack Developer – Hope Private Academy",
    description:
      "Developed a comprehensive web platform for Hope Private Academy using Next.js and Tailwind CSS.",
    src: project5,
    ctaText: "HOPE",
    ctaLink: "https://www.sawsimonlinn.com/",
    content: () => (
      <>
        <p className="mb-2">
          Developed a full-stack school management dashboard using Next.js,
          TypeScript, Tailwind CSS, and Appwrite. Implemented secure
          authentication, CRUD functionality for student and teacher records,
          monthly payment tracking, and pending application management. Designed
          an intuitive, responsive UI for administrators to efficiently manage
          data, replacing a local storage system with a scalable backend.
          Optimized for performance, usability, and real-world administrative
          workflows.
        </p>
        <h3>Key Contributions:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Designed and developed a full-stack application with Next.js</li>
          <li>
            Implemented secure authentication and role-based access control
          </li>
          <li>
            Created a responsive UI with Tailwind CSS for optimal user
            experience
          </li>
          <li>
            Integrated Appwrite for backend services and database management
          </li>
        </ul>

        <h3>Challenges:</h3>
        <ul>
          <li>Balancing multiple projects with varying deadlines</li>
          <li>Adapting to different client requirements and workflows</li>
          <li>Troubleshooting and debugging complex issues</li>
          <li>Staying updated with the latest web development trends</li>
        </ul>
      </>
    ),
  },
  {
    title: "Full-Stack Developer & Designer – EcoChallenge App",
    description:
      "Developed a web app to promote eco-friendly habits using MERN stack.",
    src: project7,
    ctaText: "Explore App",
    ctaLink: "https://ecochallengeapp.com/",
    content: () => (
      <>
        <p className="mb-2">
          Led a team of 4 developers in a week-long Code Jam, coordinating
          across multiple time zones to design and build a full-stack web app
          from scratch. Managed task delegation, created the Figma design,
          handled backend integration, and deployed both frontend and backend
          with custom domains. Resolved critical MongoDB connection issues and
          deployment errors under tight deadlines, ensuring a fully functional
          and responsive final product.
        </p>
        <h3>Key Contributions:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Led the team and planned feature roadmap</li>
          <li>Created Figma design and implemented frontend + backend</li>
          <li>Tracked user progress with custom JavaScript logic</li>
          <li>Built with Node.js, Express, MongoDB</li>
        </ul>

        <h3>Challenges:</h3>
        <ul>
          <li>Balancing multiple projects with varying deadlines</li>
          <li>Adapting to different client requirements and workflows</li>
          <li>Troubleshooting and debugging complex issues</li>
          <li>Staying updated with the latest web development trends</li>
        </ul>
      </>
    ),
  },
  {
    title: "Graphic Designer – IYF",
    description:
      "Designed engaging visuals and user interfaces for various digital platforms.",
    src: project6,
    ctaText: "View Project",
    ctaLink: "https://drivio.sawsimonlinn.com/",
    content: () => (
      <>
        <p className="mb-2">
          Created and delivered high-quality visual designs for festivals,
          camps, singing competitions, and social media campaigns. Produced
          engaging digital and print materials, including posters, flyers, and
          event branding, using Adobe Photoshop, Illustrator, and InDesign.
          Collaborated with event organizers to translate concepts into
          impactful visuals that boosted audience engagement. Contributed to a
          30% increase in online engagement and strengthened the organization’s
          visual identity across multiple platforms.
        </p>
        <h3>Key Contributions:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Created high-quality visual designs for various events</li>
          <li>Produced engaging digital and print materials</li>
          <li>Collaborated with event organizers for impactful visuals</li>
          <li>Contributed to a 30% increase in online engagement</li>
        </ul>

        <h3>Challenges:</h3>
        <ul>
          <li>Balancing multiple projects with varying deadlines</li>
          <li>Adapting to different client requirements and workflows</li>
          <li>Troubleshooting and debugging complex issues</li>
          <li>Staying updated with the latest design trends</li>
        </ul>
      </>
    ),
  },
];
