import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo';
import Courses from '@/components/Courses';
import { FocusCardsDemo } from '@/components/FocusCardsDemo';
import { GlowingEffectDemo } from '@/components/GlowingEffectDemo';
import { Hero } from '@/components/Hero';
import { NavbarDemo } from '@/components/NavbarDemo';
import { TimelineDemo } from '@/components/TimelineDemo';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <About />
      <FocusCardsDemo />
      <Courses />
      <TimelineDemo />
      <GlowingEffectDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </>
  );
}
