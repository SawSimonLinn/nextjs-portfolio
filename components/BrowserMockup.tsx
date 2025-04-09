import { ReactNode } from 'react';

interface BrowserMockupProps {
  url?: string;
  children: ReactNode;
}

export default function BrowserMockup({
  url = 'www.sawsimonlinn.com',
  children,
}: BrowserMockupProps) {
  return (
    <div className='rounded-xl border border-neutral-600 bg-neutral-900 shadow-md overflow-hidden'>
      <div className='flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-900'>
        <div className='flex items-center'>
          <span className='w-3 h-3 bg-red-500 rounded-full mr-2'></span>
          <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
          <span className='w-3 h-3 bg-green-500 rounded-full mr-4'></span>
        </div>
        <div className='center flex items-center justify-center'>
          <span className='text-xs text-white truncate bg-neutral-700 px-30 py-1 rounded-md'>
            {url}
          </span>
        </div>
        <div className='nth'></div>
      </div>
      <div className='p-4 bg-neutral-900'>{children}</div>
    </div>
  );
}
