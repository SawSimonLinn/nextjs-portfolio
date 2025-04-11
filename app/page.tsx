import { Testimonials } from '@/components/Testimonials';
import Courses from '@/components/Courses';
import { GlowingEffectDemo } from '@/components/GlowingEffectDemo';
import { Hero } from '@/components/Hero';
import { NavbarDemo } from '@/components/NavbarDemo';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <About />
      {/* <FocusCardsDemo /> */}
      <ProjectSection />
      <Courses />
      {/* <TimelineDemo /> */}
      <GlowingEffectDemo />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
