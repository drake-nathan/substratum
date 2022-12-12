import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from 'contexts/Providers';
import { AppContainer } from '../styles/App.styled';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <Providers>
      <AppContainer>
        <NavBar />

        <Component {...pageProps} />

        <Footer />
      </AppContainer>
    </Providers>
  );
};

export default MyApp;
