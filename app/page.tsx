import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import Courses from '@/components/Courses';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { TimelineDemo } from '@/components/TimelineDemo';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppleCardsCarouselDemo />
      <TimelineDemo />
      <Courses />
      <AnimatedTestimonialsDemo />
    </>
  );
}
