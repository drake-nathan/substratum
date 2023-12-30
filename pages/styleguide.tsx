import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const BlonksContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const StyleGuide: NextPage = () => (
  <BlonksContainer>
    <Head>
      <title>substratum | Style Guide</title>
      <meta content="BLONKS" name="description" />
    </Head>

    <h1>Heading One</h1>
    <h2>Heading Two</h2>
    <h3>Heading Three</h3>
    <h4>Heading Four</h4>
    <h5>Heading Five</h5>
    <h6>Heading Six</h6>
    <p>Paragraph</p>
  </BlonksContainer>
);

export default StyleGuide;
