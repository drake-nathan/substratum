import Link from 'next/link';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components';
import { fetchToken } from 'services/azureApi/fetches';
import { type Project } from 'components/LandingPage/Projects/projects';
import type { IToken } from 'services/azureApi/types';
import TokenModule from './Module/TokenModule';
import * as St from './TokenPage.styled';
import MarketIcons from 'components/MarketIcons/MarketIcons';

interface Props {
  project: Project;
  tokenId: number;
}

const TokenPage = ({ project, tokenId }: Props): JSX.Element => {
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
      <St.TokenHead>
        {/* <St.TitleDiv> */}
        <Link href={projectLink} style={{ width: 'max-content' }}>
          <St.Title>{name + ' #' + (tokenId + 1)}</St.Title>
        </Link>

        <St.ArtistDiv>
          <St.By>By</St.By>

          <a href={website} target="_blank" rel="noreferrer">
            <St.ArtistName>{artist}</St.ArtistName>
          </a>
        </St.ArtistDiv>
        {/* </St.TitleDiv> */}

        <MarketIcons project={project} tokenId={tokenId} />
        <St.TokenStatus>Token ID: {tokenId}</St.TokenStatus>
      </St.TokenHead>
      <St.TokenInfoHeading>
        <St.Header>Token Information</St.Header>
      </St.TokenInfoHeading>

      {renderToken()}
    </St.Container>
  );
};

export default TokenPage;
