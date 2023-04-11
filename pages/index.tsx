import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from 'components/LandingPage/Hero/Hero';
import Projects from 'components/LandingPage/Projects/Grid/Grid';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: NextPage = () => {
  const width = 1424;

  return (
    <HomeContainer>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      <Hero width={width} />
      <Projects width={width} />
    </HomeContainer>
  );
};

export default Home;
