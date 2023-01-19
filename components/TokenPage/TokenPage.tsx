import React from 'react';
import { useQuery } from 'react-query';
import { fetchToken } from 'services/azureApi/fetches';
import TokenModule from './Module/TokenModule';
import { Project } from 'components/LandingPage/Projects/projects';
import type { IToken } from 'services/azureApi/types';
import * as St from './TokenPage.styled';

interface Props {
  project: Project;
  tokenId: number;
}

const TokenPage: React.FC<Props> = ({ project, tokenId }) => {
  const { name, projectSlug } = project;

  const {
    isLoading,
    error,
    data: token,
  } = useQuery<IToken, Error>('token', () => fetchToken(projectSlug, tokenId));

  const renderToken = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      console.error(error);
      return <p>Error: {error.message}</p>;
    }

    if (token) {
      return <TokenModule token={token} />;
    }

    return <h1>Could not fetch token right now, try again in a moment.</h1>;
  };

  return (
    <St.Container>
      <St.Title>{name}</St.Title>

      {renderToken()}
    </St.Container>
  );
};

export default TokenPage;
