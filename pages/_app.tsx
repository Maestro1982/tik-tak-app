import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isServerSideRendering, setIsServerSideRendering] = useState(true);

  /* This will run only 1 time at the beginning (empty dependacy array) */
  useEffect(() => {
    setIsServerSideRendering(false);
  }, []);

  if (isServerSideRendering) return null;

  return (
    <div>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden lg:hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-hidden h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
