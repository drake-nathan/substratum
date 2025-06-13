import type { NextPage } from "next";

import Hero from "components/LandingPage/Hero";
import Projects from "components/LandingPage/Projects/Grid";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  const width = 1424;

  return (
    <div className="flex w-full flex-col items-center ">
      <Head>
        <title>substratum</title>
        <meta content="substratum" name="description" />
      </Head>

      <Hero width={width} />
      <Projects width={width} />
    </div>
  );
};

export default Home;
