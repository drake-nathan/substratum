import React from 'react';
import styled from 'styled-components';
import TokenModule from './Module/TokenModule';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 1200px;
  margin-top: 7em;
  gap: 1.5em;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

interface Props {
  projectName: string;
  projectSlug: string;
  tokenId: string;
}

const Token: React.FC<Props> = ({ projectName, projectSlug, tokenId }) => {
  return (
    <Container>
      <Title>{projectName}</Title>
      <TokenModule tokenId={tokenId} />
    </Container>
  );
};

export default Token;
