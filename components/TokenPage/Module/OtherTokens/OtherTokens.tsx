import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import type { Project } from "data/projects";
import type { CollectionResponse, IToken } from "services/azureApi/types";

import TokenCard from "./TokenCard";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { fetchCollectionTokens } from "services/azureApi/fetches";

interface Props {
  project: Project;
  token: IToken;
}

const OtherTokens = ({ project, token }: Props): JSX.Element => {
  const { projectSlug } = project;
  const { token_id: tokenId } = token;

  const currentSupply = useCurrentSupply(projectSlug);

  const skip =
    currentSupply && currentSupply < tokenId + 3 ?
      currentSupply - 3
    : tokenId + 1;

  const {
    data: response,
    error,
    isLoading,
    refetch,
  } = useQuery<CollectionResponse>({
    queryFn: () =>
      fetchCollectionTokens(projectSlug, 3, skip, "asc", "tokenId", null),
    queryKey: ["tokens"],
  });

  useEffect(() => {
    void refetch();
  }, [refetch, tokenId]);

  return (
    <div className="mt-12">
      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
      {(!isLoading && error) || !response?.tokens.length ? null : (
        <>
          <h2 className="mb-2">Other Tokens</h2>

          <div className="flex w-full justify-between gap-8 max-md:flex-wrap max-md:justify-evenly">
            {response.tokens.length ?
              response.tokens.map((t) => <TokenCard key={t.name} token={t} />)
            : null}
          </div>
        </>
      )}
    </div>
  );
};

export default OtherTokens;
