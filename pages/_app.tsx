import "../styles/globals.css";
import "../styles/spinner.css";
import "../styles/fonts.css";
import "react-tooltip/dist/react-tooltip.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Providers from "contexts/Providers";
import type { AppProps } from "next/app";

import { AppContainer } from "../styles/App.styled";

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
