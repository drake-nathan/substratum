import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife" />
      </Head>

      <h1>Substratum</h1>
    </St.AppContainer>
  );
};

export default Home;
