'use client';

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <div className='relative flex h-full w-full items-center justify-center bg-white dark:bg-black'>
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
        <section className='z-10 px-6 py-20 text-white'>
          <div className='max-w-5xl mx-auto space-y-10'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className='rounded-lg object-cover w-full h-auto'
              />
            </div>

            <p className='text-lg text-gray-300'>{project.description}</p>

            <ul className='list-disc list-inside text-gray-400 space-y-1'>
              {project.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div>
              <h2 className='text-2xl font-semibold'>Skills & Technologies</h2>
              <div className='flex flex-wrap gap-3 text-sm text-white/80 mt-2'>
                {project.skills.map((skill, i) => (
                  <span key={i} className='bg-white/10 px-3 py-1 rounded'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-semibold'>Techniques & Practices</h2>
              <ul className='list-disc list-inside text-gray-400 space-y-1 mt-2'>
                {project.techniques.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-semibold mb-2'>Project Demo</h2>
              <div className='aspect-video w-full'>
                <iframe
                  src={project.video}
                  title='Project demo'
                  className='w-full h-full rounded-lg'
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex gap-4 mt-6'>
              <a
                href={project.github}
                target='_blank'
                className='bg-white text-black px-4 py-2 rounded hover:bg-white/90'
              >
                View GitHub
              </a>
              <a
                href={project.demo}
                target='_blank'
                className='border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black'
              >
                Live Demo
              </a>
            </div>

            <div className='mt-10 text-center'>
              <Link href='/' className='text-blue-400 hover:underline'>
                ← Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
