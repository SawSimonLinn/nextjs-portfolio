import { FocusCards } from '@/components/ui/focus-cards';
import { url } from 'inspector';

export function FocusCardsDemo() {
  const cards = [
    {
      title: 'Forest Adventure',
      src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://example.com/forest-adventure',
    },
    {
      title: 'Valley of life',
      src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://example.com/valley-of-life',
    },
    {
      title: 'Sala behta hi jayega',
      src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Camping is for pros',
      src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The road not taken',
      src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The First Rule',
      src: 'https://assets.aceternity.com/the-first-rule.png',
    },
  ];

  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-col items-center py-20 px-4 md:px-8 lg:px-10'>
        <h2 className='text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl'>
          Featured Projects
        </h2>
        <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl text-center'>
          A curated selection of my favourite builds—each project designed,
          developed, and polished with real-world functionality and creative
          flair.
        </p>
      </div>
      <FocusCards cards={cards} />
    </>
  );
}
