import { useInfiniteQuery } from "@tanstack/react-query";
import type { Project } from "components/staticData/projects";
import { useEffect, useState } from "react";
import { fetchCollectionTokens } from "services/azureApi/fetches";
import type { CollectionResponse } from "services/azureApi/types";

import TokenGrid from "./TokenGrid/TokenGrid";
import TokenMenu from "./TokenMenu/TokenMenu";
import { TokensContainer } from "./Tokens.styled";

interface Props {
  projectSlug: string;
  project: Project;
}

const Tokens = ({ projectSlug, project }: Props): JSX.Element => {
  const { isTokenIdInTitle, usesTransfers } = project;
  // api query state
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [sortType, setSortType] = useState<"tokenId" | "worldLevel">("tokenId");
  const [tokenSearchId, setTokenSearchId] = useState<number | null>(null);
  // infinite scroll state
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 20;

  const { error, data, isLoading, isFetching, fetchNextPage, refetch } =
    useInfiniteQuery<CollectionResponse, Error>({
      getNextPageParam: (lastFetch) => lastFetch.skip + limit,
      initialPageParam: 0,
      queryFn: ({ pageParam: skip }) =>
        fetchCollectionTokens(
          projectSlug,
          limit,
          skip as number,
          sortDir,
          sortType,
          tokenSearchId,
        ),
      queryKey: ["tokens"],
    });

  useEffect(() => {
    if (error) console.error(error.message);
    if (data) {
      const lastPage = data.pages[data.pages.length - 1];
      if (lastPage) {
        setHasMore(lastPage.hasMore);
        setCurrentLength(lastPage.skip + lastPage.tokens.length);
      }
    }
  }, [data, error]);

  useEffect(() => {
    refetch();
  }, [sortDir, sortType, projectSlug, refetch]);

  useEffect(() => {
    if (tokenSearchId) setHasMore(false);
  }, [tokenSearchId]);

  return (
    <TokensContainer>
      <TokenMenu
        project={project}
        refetch={refetch}
        setSortDir={setSortDir}
        setSortType={setSortType}
        setTokenSearchId={setTokenSearchId}
        sortDir={sortDir}
        sortType={sortType}
        tokenSearchId={tokenSearchId}
        usesTransfers={usesTransfers}
      />
      {projectSlug === "100x10x1-a" ? (
        <TokenGrid
          currentLength={currentLength}
          data={data}
          error={error}
          fetchNextPage={fetchNextPage}
          hasMore={hasMore}
          isFetching={isFetching}
          isLoading={isLoading}
          isTokenIdInTitle={isTokenIdInTitle}
        />
      ) : (
        <TokenGrid
          currentLength={currentLength}
          data={data}
          error={error}
          fetchNextPage={fetchNextPage}
          hasMore={hasMore}
          isFetching={isFetching}
          isLoading={isLoading}
          isTokenIdInTitle={isTokenIdInTitle}
        />
      )}
    </TokensContainer>
  );
};

export default Tokens;
