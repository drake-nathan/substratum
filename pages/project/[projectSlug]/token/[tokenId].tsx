import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Token from 'components/Token';

const Home: NextPage = () => {
  const { projectSlug, tokenId } = useRouter().query;

  return (
    <>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      {projectSlug && tokenId && (
        <Token
          projectName="Mathare Memories"
          projectSlug={projectSlug as string}
          tokenId={tokenId as string}
        />
      )}
    </>
  );
};

export default Home;
