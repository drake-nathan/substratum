import type { NextPage } from "next";

import Head from "next/head";
import React from "react";

import Hero from "components/LandingPage/Hero";
import Projects from "components/LandingPage/Projects/Grid";

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
