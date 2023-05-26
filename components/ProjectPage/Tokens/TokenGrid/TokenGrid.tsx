import InfiniteScroll from 'react-infinite-scroll-component';
import { type InfiniteData } from 'react-query';
import { type CollectionResponse } from 'services/azureApi/types';
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
  isTokenIdInTitle: boolean;
}

const TokenGrid = ({
  data: tokens,
  currentLength,
  hasMore,
  fetchNextPage,
  error,
  isLoading,
  isFetching,
  isTokenIdInTitle,
}: Props): JSX.Element => (
  <St.Container>
    {/* FIXME: */}
    {/* eslint-disable-next-line no-nested-ternary */}
    {tokens ? (
      <InfiniteScroll
        dataLength={currentLength}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={<St.H1>Loading...</St.H1>}
      >
        <St.Grid>
          {tokens.pages.map((page) =>
            page.tokens.map((token) => (
              <TokenCard
                token={token}
                key={token.name}
                isTokenIdInTitle={isTokenIdInTitle}
              />
            )),
          )}
        </St.Grid>
      </InfiniteScroll>
    ) : error && (!isLoading || !isFetching) ? (
      <St.H1>Unable to fetch tokens right now.</St.H1>
    ) : (
      <St.H1>Loading...</St.H1>
    )}
  </St.Container>
);
export default TokenGrid;
