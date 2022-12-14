import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import TokenPage from 'components/Token/TokenPage';
import { projects } from 'components/LandingPage/Projects/projects';

const Home: NextPage = () => {
  const { projectSlug, tokenId: tokenIdQuery } = useRouter().query;

  const [tokenId, setTokenId] = useState<number | null>(null);
  const [isTokenIdValid, setIsTokenIdValid] = useState<boolean>(false);

  const project = projects.find((p) => p.projectSlug === projectSlug);

  // this useEffect validates the token id query param as a valid number
  useEffect(() => {
    if (!project) return;
    // no need to validate token id if project is not found

    if (tokenIdQuery === '0') {
      setTokenId(0);
      return;
    }

    if (tokenIdQuery && Number(tokenIdQuery)) {
      setTokenId(Number(tokenIdQuery));
      return;
    }

    // else
    setTokenId(null);
    setIsTokenIdValid(false);
  }, [tokenIdQuery, project]);

  // this useEffect validates that the token id is within the project's range
  useEffect(() => {
    if (!project || tokenId === null) return;
    // no need to validate token id if project is not found
    const { isZeroIndexed, maxSupply, currentSupply } = project;

    if (!isZeroIndexed && tokenId === 0) {
      setTokenId(1);
      setIsTokenIdValid(true);
      return;
    }

    if (currentSupply && tokenId > currentSupply) {
      if (isZeroIndexed) {
        setTokenId(currentSupply - 1);
        setIsTokenIdValid(true);
      } else {
        setTokenId(currentSupply);
        setIsTokenIdValid(true);
      }
      return;
    }

    if (tokenId > maxSupply) {
      if (isZeroIndexed) {
        setTokenId(maxSupply - 1);
        setIsTokenIdValid(true);
      } else {
        setTokenId(maxSupply);
        setIsTokenIdValid(true);
      }
      return;
    }

    // else, token id is valid
    setIsTokenIdValid(true);
  }, [tokenId, project]);

  const renderTokenPage = () => {
    if (project && tokenId && isTokenIdValid) {
      return <TokenPage project={project} tokenId={tokenId} />;
    }

    if (!project) {
      return <h1>Can&apos;t find project.</h1>;
    }

    if (!isTokenIdValid) {
      return <h1>Invalid token id</h1>;
    }

    return <h1>Loading...</h1>;
  };

  return (
    <>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      {renderTokenPage()}
    </>
  );
};

export default Home;
