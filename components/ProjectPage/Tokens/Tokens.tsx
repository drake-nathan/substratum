import { useEffect, useState } from 'react';
import { type QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import { type Project } from 'components/_staticData/projects';
import type { CollectionResponse } from 'services/azureApi/types';
import TokenGrid from './TokenGrid/TokenGrid';
import TokenMenu from './TokenMenu/TokenMenu';
import { TokensContainer } from './Tokens.styled';

interface Props {
  projectSlug: string;
  project: Project;
}

const Tokens = ({ projectSlug, project }: Props): JSX.Element => {
  const { isTokenIdInTitle, usesTransfers, aspectRatio } = project;
  // api query state
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [sortType, setSortType] = useState<'tokenId' | 'worldLevel'>('tokenId');
  const [tokenSearchId, setTokenSearchId] = useState<number | null>(null);
  // infinite scroll state
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 20;

  const fetchQuery = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens(
      projectSlug,
      limit,
      skip,
      sortDir,
      sortType,
      tokenSearchId,
    );

  const {
    error,
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
    remove,
  } = useInfiniteQuery<CollectionResponse, Error>('tokens', fetchQuery, {
    getNextPageParam: (lastFetch) => lastFetch.skip + limit,
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
    remove();
    refetch();
  }, [sortDir, sortType, projectSlug]);

  useEffect(() => {
    if (tokenSearchId) setHasMore(false);
  }, [tokenSearchId]);

  return (
    <TokensContainer>
      <TokenMenu
        project={project}
        usesTransfers={usesTransfers}
        sortDir={sortDir}
        setSortDir={setSortDir}
        sortType={sortType}
        setSortType={setSortType}
        tokenSearchId={tokenSearchId}
        setTokenSearchId={setTokenSearchId}
        refetch={refetch}
      />
      <TokenGrid
        data={data}
        currentLength={currentLength}
        hasMore={hasMore}
        fetchNextPage={fetchNextPage}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        isTokenIdInTitle={isTokenIdInTitle}
        aspectRatio={aspectRatio}
      />
    </TokensContainer>
  );
};

export default Tokens;
