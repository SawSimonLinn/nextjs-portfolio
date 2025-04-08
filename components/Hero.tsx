import { BackgroundLines } from '@/components/ui/background-lines';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';

export function Hero() {
  return (
    <BackgroundLines className='flex items-center justify-center w-full flex-col px-4'>
      <p className='max-w-xl mx-auto text-sm md:text-xl text-neutral-700 dark:text-neutral-200 text-center'>
        Hello 👋 Im Simon, A Frontend Developer
      </p>
      <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-6 md:pt-2 md:pb-10 relative z-20 font-bold tracking-tight'>
        Saw Simon Linn, <br />
        <ContainerTextFlip
          words={['Frontend', 'React', 'Next.js', 'JavaScript']}
          className='text-2xl me-2 md:text-4xl lg:text-7xl text-neutral-300 dark:text-white-300'
        />
        Developer.
      </h2>
      <p className='max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center'>
        A TripleTen graduate from California, USA, specializing in building
        modern, user-friendly websites and creating responsive web designs.
      </p>
    </BackgroundLines>
  );
}
