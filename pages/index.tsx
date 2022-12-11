import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from 'components/LandingPage/Hero';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>
      <Hero />
    </HomeContainer>
  );
};

export default Home;
