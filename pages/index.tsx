import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>
    </St.AppContainer>
  );
};

export default Home;
