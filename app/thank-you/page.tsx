import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className='h-screen flex flex-col items-center justify-between bg-white text-black dark:bg-black dark:text-white px-6 transition-colors duration-300'>
      <div></div>
      <div className='max-w-xl text-center'>
        <h1 className='text-4xl font-bold mb-4'>Thank You 💌</h1>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Your message has been sent successfully! I’ll be in touch as soon as
          possible. I’m already excited to connect with you 🤍
        </p>
        <Link
          href='/'
          className='inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium hover:opacity-90 transition'
        >
          Back to Home
        </Link>
      </div>
      <span className='text-gray-500 dark:text-gray-400 text-sm mb-10 tracking-wider'>
        © 2025 Saw Simon Linn
      </span>
    </section>
  );
}
