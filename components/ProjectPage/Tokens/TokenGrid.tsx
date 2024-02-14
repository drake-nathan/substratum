import type { InfiniteData } from "@tanstack/react-query";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import type { CollectionResponse } from "services/azureApi/types";

import Loader from "./Loader";
import TokenCard from "./TokenCard";

interface Props {
  currentLength: number;
  data: InfiniteData<CollectionResponse> | undefined;
  error: Error | null;
  fetchNextPage: () => void;
  hasMore: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isTokenIdInTitle: boolean;
}

const TokenGrid = ({
  currentLength,
  data: tokens,
  error,
  fetchNextPage,
  hasMore,
  isFetching,
  isLoading,
  isTokenIdInTitle,
}: Props): React.JSX.Element => (
  <div className="mb-12 flex min-h-[500px] w-full flex-col items-center">
    {tokens ?
      <InfiniteScroll
        dataLength={currentLength}
        hasMore={hasMore}
        loader={<Loader loading>Loading...</Loader>}
        next={fetchNextPage}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tokens.pages.map((page) =>
            page.tokens.map((token) => (
              <TokenCard
                isTokenIdInTitle={isTokenIdInTitle}
                key={token.name}
                token={token}
              />
            )),
          )}
        </div>
      </InfiniteScroll>
    : error && (!isLoading || !isFetching) ?
      <Loader>Unable to fetch tokens right now.</Loader>
    : <Loader loading>Loading...</Loader>}
  </div>
);
export default TokenGrid;
