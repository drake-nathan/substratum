import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";

import type { Project } from "data/projects";
import type { IToken } from "services/azureApi/types";

import TokenModule from "./Module/TokenModule";
import MarketIcons from "components/MarketIcons/MarketIcons";
import { fetchToken } from "services/azureApi/fetches";

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
    <div className="flex w-full flex-col" id="token-page-container">
      <div
        className="mt-7 flex w-full flex-col p-20 max-md:mt-5 max-md:p-12 max-sm:mt-4 max-sm:p-6"
        id="token-page-head"
      >
        <Link
          className="w-max hover:cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"
          href={projectLink}
        >
          <h1
            className="max-md:text-3xl max-sm:text-2xl"
            id="token-page-token-title"
          >{`${name} #${tokenId}`}</h1>
        </Link>

        <div className="mb-6 flex gap-1 sm:gap-2" id="token-page-artist-div">
          <h3 className="font-sans text-3xl capitalize italic max-md:text-2xl max-sm:text-xl">
            By
          </h3>
          <a href={website} rel="noreferrer" target="_blank">
            <h3 className="font-sans text-3xl capitalize italic hover:text-hover-light dark:hover:text-hover-dark max-md:text-2xl max-sm:text-xl">
              {artist}
            </h3>
          </a>
        </div>

        <div className="ml-1">
          <MarketIcons project={project} tokenId={tokenId} />
        </div>

        <div className="font-sans text-lg italic sm:text-xl md:text-2xl">
          Token ID: {tokenId}
        </div>
      </div>

      <div
        className="flex w-full items-start border-b border-black px-6 dark:border-white sm:px-12 md:px-20"
        id="token-page-divider"
      >
        <h2 className="mb-1 max-md:text-2xl max-sm:text-xl">
          Token Information
        </h2>
      </div>

      {renderToken()}
    </div>
  );
};

export default TokenPage;
