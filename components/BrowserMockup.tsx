import { ReactNode } from 'react';

interface BrowserMockupProps {
  urlText?: ReactNode; // Accepts JSX elements
  children: ReactNode;
}

const BrowserMockup = ({
  urlText = '🔒 www.sawsimonlinn.com',
  children,
}: BrowserMockupProps) => {
  return (
    <div className='rounded-xl lg:mx-30 border bg-zinc-400 border-zinc-300 dark:border-neutral-600 dark:bg-neutral-900 shadow-md overflow-hidden'>
      <div className='flex items-center justify-between px-4 py-2 bg-white border-zinc-300 dark:bg-neutral-800 border-b dark:border-neutral-900'>
        <div className='flex items-center'>
          <span className='w-3 h-3 bg-red-500 rounded-full mr-2'></span>
          <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
          <span className='w-3 h-3 bg-green-500 rounded-full mr-4'></span>
        </div>
        <div className='center flex items-center justify-center'>
          <span className='text-xs dark:text-white text-black truncate bg-zinc-200 dark:bg-neutral-700 px-5 sm:px-30 py-1 rounded-md'>
            {urlText}
          </span>
        </div>
        <div className='nth'></div>
      </div>
      <div className='p-4 bg-zinc-100 dark:bg-neutral-900'>{children}</div>
    </div>
  );
};

export default BrowserMockup;
