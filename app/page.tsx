import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import Courses from '@/components/Courses';
import { Hero } from '@/components/Hero';
import { NavbarDemo } from '@/components/NavbarDemo';
import { TimelineDemo } from '@/components/TimelineDemo';

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Courses />
      <AppleCardsCarouselDemo />
      <TimelineDemo />
      <AnimatedTestimonialsDemo />
    </>
  );
}
