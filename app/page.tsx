import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';
import Courses from '@/components/Courses';
import { GlowingEffectDemo } from '@/components/GlowingEffectDemo';
import { Hero } from '@/components/Hero';
import { NavbarDemo } from '@/components/NavbarDemo';
import { TimelineDemo } from '@/components/TimelineDemo';

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Courses />
      <TimelineDemo />
      <GlowingEffectDemo />
      <AnimatedTestimonialsDemo />
    </>
  );
}
