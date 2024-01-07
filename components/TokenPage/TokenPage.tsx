import type { IToken } from "services/azureApi/types";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { fetchToken } from "services/azureApi/fetches";

import type { Project } from "data/projects";

import TokenModule from "./Module/TokenModule";
import * as St from "./TokenPage.styled";
import MarketIcons from "components/MarketIcons/MarketIcons";

interface Props {
  project: Project;
  tokenId: number;
}

const TokenPage = ({ project, tokenId }: Props): JSX.Element => {
  const { artist, name, projectSlug, website } = project;

  const projectLink = `/project/${projectSlug}`;

  const {
    data: token,
    error,
    isLoading,
    refetch,
  } = useQuery<IToken>({
    queryFn: () => fetchToken(projectSlug, tokenId),
    queryKey: ["token"],
  });

  useEffect(() => {
    void refetch();
  }, [refetch, tokenId]);

  const renderToken = (): JSX.Element => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      console.error(error);
      return (
        <p>
          Error:
          {error.message}
        </p>
      );
    }

    if (token) {
      return <TokenModule project={project} token={token} />;
    }

    return <h1>Could not fetch token right now, try again in a moment.</h1>;
  };

  return (
    <St.Container>
      <St.TokenHead>
        <Link href={projectLink} style={{ width: "max-content" }}>
          <St.Title>{`${name} #${tokenId}`}</St.Title>
        </Link>

        <St.ArtistDiv>
          <St.By>By</St.By>

          <a href={website} rel="noreferrer" target="_blank">
            <St.ArtistName>{artist}</St.ArtistName>
          </a>
        </St.ArtistDiv>

        <St.MarketIconsWrapper>
          <MarketIcons project={project} tokenId={tokenId} />
        </St.MarketIconsWrapper>

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
