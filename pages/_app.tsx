import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState<boolean>(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) return null;

  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
      <Navbar />
      <div className="flex ">
        <Sidebar />

        <div className="flex flex-col gap-10 overflow-auto videos flex-1">
          {' '}
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};
export default App;
