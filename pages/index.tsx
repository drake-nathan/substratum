import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from 'components/LandingPage/Hero/Hero';
import Projects from 'components/LandingPage/Projects/Grid/Grid';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      <Hero />
      <Projects />
    </HomeContainer>
  );
};

export default Home;
