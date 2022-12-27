import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import TokenPage from 'components/Token/TokenPage';
import { projects } from 'components/LandingPage/Projects/projects';

const Home: NextPage = () => {
  const { projectSlug, tokenId } = useRouter().query;

  const project = projects.find((p) => p.projectSlug === projectSlug);

  return (
    <>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      {project && tokenId && <TokenPage project={project} tokenId={tokenId as string} />}
    </>
  );
};

export default Home;
