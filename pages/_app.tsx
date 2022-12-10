import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from 'contexts/Providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
