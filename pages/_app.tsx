import "../styles/globals.css";
import "../styles/spinner.css";
import "../styles/fonts.css";
import "react-tooltip/dist/react-tooltip.css";

import { Analytics } from "@vercel/analytics/react";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Providers from "contexts/Providers";
import type { AppProps } from "next/app";

import { AppContainer, BodyContainer } from "../styles/App.styled";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Providers>
      <AppContainer>
        <Header />

        <BodyContainer>
          <Component {...pageProps} />
        </BodyContainer>

        <Footer />
      </AppContainer>
    </Providers>
    <Analytics />
  </>
);

export default MyApp;
