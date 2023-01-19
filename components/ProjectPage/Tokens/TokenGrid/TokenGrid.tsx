import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteData } from 'react-query';
import { CollectionResponse } from 'services/azureApi/types';
import TokenCard from '../TokenCard/TokenCard';
import * as St from './TokenGrid.styled';

interface Props {
  data: InfiniteData<CollectionResponse> | undefined;
  currentLength: number;
  hasMore: boolean;
  fetchNextPage: () => void;
  error: Error | null;
  isLoading: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  isTokenIdInTitle: boolean;
}

const TokenGrid: React.FC<Props> = ({
  data: tokens,
  currentLength,
  hasMore,
  fetchNextPage,
  error,
  isLoading,
  isFetching,
  isFetchingNextPage,
  isTokenIdInTitle,
}) => {
  if (isLoading) return <St.H1>Loading...</St.H1>;

  return (
    <St.Container>
      {tokens ? (
        <>
          <InfiniteScroll
            dataLength={currentLength}
            next={fetchNextPage}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
            <St.Wrapper>
              {tokens.pages.map((page) =>
                page.tokens.map((token) => (
                  <TokenCard
                    token={token}
                    key={token.name}
                    isTokenIdInTitle={isTokenIdInTitle}
                  />
                )),
              )}
            </St.Wrapper>
          </InfiniteScroll>
          {isFetchingNextPage && <h1>Loading more tokens...</h1>}
        </>
      ) : error && (!isLoading || !isFetching) ? (
        <St.H1>Unable to fetch tokens right now.</St.H1>
      ) : (
        <St.H1>Loading...</St.H1>
      )}
    </St.Container>
  );
};

export default TokenGrid;
