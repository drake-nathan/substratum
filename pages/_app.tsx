import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Providers from "contexts/Providers";
import "react-tooltip/dist/react-tooltip.css";

import { AppContainer } from "../styles/App.styled";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/spinner.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Providers>
      <AppContainer>
        <Header />

        <div className="flex size-full grow flex-col items-center">
          <Component {...pageProps} />
        </div>

        <Footer />
      </AppContainer>
    </Providers>

    <Analytics />
    <SpeedInsights />
  </>
);

export default MyApp;
