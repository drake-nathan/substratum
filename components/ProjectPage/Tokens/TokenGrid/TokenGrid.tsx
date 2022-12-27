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
}

const TokenGrid: React.FC<Props> = ({
  data,
  currentLength,
  hasMore,
  fetchNextPage,
  error,
  isLoading,
}) => {
  return (
    <St.Container>
      {data ? (
        <InfiniteScroll
          dataLength={currentLength}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <St.Wrapper>
            {data.pages.map((page) =>
              page.tokens.map((token) => <TokenCard token={token} key={token.name} />),
            )}
          </St.Wrapper>
        </InfiniteScroll>
      ) : error && !isLoading ? (
        <St.H1>Unable to fetch tokens right now.</St.H1>
      ) : (
        <St.H1>Loading...</St.H1>
      )}
    </St.Container>
  );
};

export default TokenGrid;
