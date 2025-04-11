import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='flex flex-col items-center h-screen bg-black'>
      <div className='flex flex-col items-center justify-center h-full text-white text-center px-4'>
        <h1 className='text-5xl font-bold mb-4'>404 - Page Not Found</h1>
        <p className='text-gray-400 mb-8'>
          Oopsie! The page you're looking for doesn’t exist.
        </p>

        <Link
          href='/'
          className='bg-white text-black px-6 py-2 rounded hover:bg-white/80 transition'
        >
          Go Home
        </Link>
      </div>
      <span className='text-gray-400 text-sm tracking-wider'>
        © 2025 Saw Simon Linn
      </span>
    </section>
  );
}
