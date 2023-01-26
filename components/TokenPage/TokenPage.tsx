import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components';
import { fetchToken } from 'services/azureApi/fetches';
import { type Project } from 'components/LandingPage/Projects/projects';
import type { IToken } from 'services/azureApi/types';
import TokenModule from './Module/TokenModule';
import * as St from './TokenPage.styled';

interface Props {
  project: Project;
  tokenId: number;
}

const TokenPage: React.FC<Props> = ({ project, tokenId }) => {
  const { name, projectSlug, artist, website } = project;

  const { isMobile } = useTheme();

  const projectLink = `/project/${projectSlug}`;

  const {
    isLoading,
    error,
    data: token,
  } = useQuery<IToken, Error>('token', () => fetchToken(projectSlug, tokenId));

  const renderToken = (): JSX.Element => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      console.error(error);
      return <p>Error: {error.message}</p>;
    }

    if (token) {
      return <TokenModule token={token} project={project} />;
    }

    return <h1>Could not fetch token right now, try again in a moment.</h1>;
  };

  return (
    <St.Container>
      <St.TitleHeader>
        <St.TitleDiv>
          <Link href={projectLink}>
            <St.Title>{name}</St.Title>
          </Link>

          <St.ArtistDiv>
            <St.By>By</St.By>

            <a href={website} target="_blank" rel="noreferrer">
              <St.ArtistName>{artist}</St.ArtistName>
            </a>
          </St.ArtistDiv>
        </St.TitleDiv>

        {!isMobile && (
          <Link href={projectLink}>
            <St.BackDiv>
              <St.BackIcon />

              <St.BackText>Back to Collection</St.BackText>
            </St.BackDiv>
          </Link>
        )}
      </St.TitleHeader>

      {renderToken()}
    </St.Container>
  );
};

export default TokenPage;
