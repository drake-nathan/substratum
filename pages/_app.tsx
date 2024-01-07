import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "react-tooltip/dist/react-tooltip.css";

import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/spinner.css";
import Footer from "components/Footer";
import Header from "components/Header/Header";
import Providers from "contexts/Providers";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Providers>
      <div className="flex min-h-screen w-full cursor-default flex-col items-stretch bg-white text-black dark:bg-black dark:text-white">
        <Header />

        <div className="flex size-full grow flex-col items-center">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </Providers>

    <Analytics />
    <SpeedInsights />
  </>
);

export default MyApp;
