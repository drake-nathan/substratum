import '../styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import type { AppProps } from 'next/app';
import Providers from 'contexts/Providers';
import { AppContainer, BodyContainer } from '../styles/App.styled';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import { kanit } from 'styles/fonts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <AppContainer className={kanit.className}>
        <NavBar />

        <BodyContainer>
          <Component {...pageProps} />
        </BodyContainer>

        <Footer />
      </AppContainer>
    </Providers>
  );
};

export default MyApp;
