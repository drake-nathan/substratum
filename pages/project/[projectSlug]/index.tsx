import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const Home: NextPage = () => {
  const { projectSlug } = useRouter().query;

  return (
    <HomeContainer>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      <h1>{projectSlug}</h1>
    </HomeContainer>
  );
};

export default Home;
