"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFinished(true), 4600);
    return () => clearTimeout(timer);
  }, []);

  if (finished) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black dark:bg-transparent dark:text-white transition-colors duration-300">
      <h1 className="text-xl md:text-3xl font-bold typing-animation">
        Modern Next.js Portfolio...
      </h1>
    </div>
  );
}
