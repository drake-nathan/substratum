import type { CollectionResponse } from "services/azureApi/types";

import { useInfiniteQuery } from "@tanstack/react-query";
import { parseAsStringEnum, useQueryState } from "next-usequerystate";
import { useEffect, useState } from "react";
import { fetchCollectionTokens } from "services/azureApi/fetches";

import type { Project } from "data/projects";

import TokenGrid from "./TokenGrid/TokenGrid";
import TokenMenu from "./TokenMenu/TokenMenu";
import { TokensContainer } from "./Tokens.styled";

interface Props {
  project: Project;
  projectSlug: string;
}

const Tokens = ({ project, projectSlug }: Props): JSX.Element => {
  const { isTokenIdInTitle, usesTransfers } = project;

  // infinite scroll state
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 20;

  // api query state - using query strings
  // const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [sortDir, setSortDir] = useQueryState(
    "sortDir",
    parseAsStringEnum(["asc", "desc"]).withDefault("asc").withOptions({
      history: "push",
      shallow: false,
    }),
  );
  const [sortType, setSortType] = useQueryState(
    "sortType",
    parseAsStringEnum(["tokenId", "worldLevel"])
      .withDefault("tokenId")
      .withOptions({
        history: "push",
        shallow: false,
      }),
  );
  const [tokenSearchId, setTokenSearchId] = useState<null | number>(null);

  const { data, error, fetchNextPage, isFetching, isLoading, refetch } =
    useInfiniteQuery<CollectionResponse>({
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

      setHasMore(lastPage.hasMore);
      setCurrentLength(lastPage.skip + lastPage.tokens.length);
    }
  }, [data, error]);

  useEffect(() => {
    void refetch();
  }, [sortDir, sortType, projectSlug, refetch]);

  useEffect(() => {
    if (tokenSearchId) setHasMore(false);
  }, [tokenSearchId]);

  return (
    <TokensContainer>
      <TokenMenu
        project={project}
        refetch={() => void refetch()}
        setSortDir={(dir) => void setSortDir(dir)}
        setSortType={(type) => void setSortType(type)}
        setTokenSearchId={setTokenSearchId}
        sortDir={sortDir}
        sortType={sortType}
        tokenSearchId={tokenSearchId}
        usesTransfers={usesTransfers}
      />

      <TokenGrid
        currentLength={currentLength}
        data={data}
        error={error}
        fetchNextPage={() => void fetchNextPage()}
        hasMore={hasMore}
        isFetching={isFetching}
        isLoading={isLoading}
        isTokenIdInTitle={isTokenIdInTitle}
      />
    </TokensContainer>
  );
};

export default Tokens;
