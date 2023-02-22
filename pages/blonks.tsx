import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const BlonksContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const Blonks: NextPage = () => {
  return (
    <BlonksContainer>
      <Head>
        <title>substratum | BLONKS</title>
        <meta name="description" content="BLONKS" />
      </Head>

      <h1>Blonks</h1>
    </BlonksContainer>
  );
};

export default Blonks;
