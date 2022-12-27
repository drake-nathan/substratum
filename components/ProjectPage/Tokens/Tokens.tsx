import React, { useEffect, useState } from 'react';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import { CollectionResponse } from 'services/azureApi/types';
import TokenGrid from './TokenGrid/TokenGrid';
import TokenMenu from './TokenMenu/TokenMenu';

interface Props {
  projectSlug: string;
}

const Tokens: React.FC<Props> = ({ projectSlug }) => {
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [sortType, setSortType] = useState<'tokenId' | 'worldLevel'>('tokenId');
  const [tokenSearchId, setTokenSearchId] = useState<number | null>(null);
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 20;

  const fetchQuery = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens(projectSlug, limit, skip, sortDir, sortType, tokenSearchId);

  const { error, data, isLoading, fetchNextPage, refetch } = useInfiniteQuery<
    CollectionResponse,
    Error
  >('tokens', fetchQuery, { getNextPageParam: (lastFetch) => lastFetch.skip + limit });

  useEffect(() => {
    if (error) console.error(error.message);
    if (data) {
      const lastPage = data.pages[data.pages.length - 1];
      setHasMore(lastPage.hasMore);
      setCurrentLength(lastPage.skip + lastPage.tokens.length);
    }
  }, [data, error]);

  useEffect(() => {
    refetch();
  }, [sortDir, sortType]);

  return (
    <>
      <TokenMenu
        projectSlug={projectSlug}
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
      />
    </>
  );
};

export default Tokens;
