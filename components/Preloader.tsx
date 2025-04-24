'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const firstStage = setTimeout(() => setShowWelcome(true), 2200);
    const secondStage = setTimeout(() => setFinished(true), 4600);
    return () => {
      clearTimeout(firstStage);
      clearTimeout(secondStage);
    };
  }, []);

  if (finished) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white text-black dark:bg-transparent dark:text-white transition-colors duration-300'>
      {!showWelcome ? (
        <h1 className='text-xl md:text-3xl font-bold typing-animation'>
          Modern Next.js Portfolio...
        </h1>
      ) : (
        <h1 className='text-3xl md:text-6xl font-extrabold welcome-animation'>
          Welcome
        </h1>
      )}
    </div>
  );
}
