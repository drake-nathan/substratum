import type { Project } from "components/staticData/projects";
import type { CollectionResponse, IToken } from "services/azureApi/types";

import { useQuery } from "@tanstack/react-query";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { useEffect } from "react";
import { fetchCollectionTokens } from "services/azureApi/fetches";

import * as St from "./OtherTokens.styled";
import TokenCard from "./TokenCard";

interface Props {
  project: Project;
  token: IToken;
}

const OtherTokens = ({ project, token }: Props): JSX.Element => {
  const { projectSlug } = project;
  const { token_id: tokenId } = token;

  const currentSupply = useCurrentSupply(projectSlug);

  const skip =
    currentSupply && currentSupply < tokenId + 3
      ? currentSupply - 3
      : tokenId + 1;

  const {
    data: response,
    error,
    isLoading,
    refetch,
  } = useQuery<CollectionResponse, Error>({
    queryFn: () =>
      fetchCollectionTokens(projectSlug, 3, skip, "asc", "tokenId", null),
    queryKey: ["tokens"],
  });

  useEffect(() => {
    refetch();
  }, [refetch, tokenId]);

  return (
    <St.OtherTokensContainer>
      {(!isLoading && error) || !response?.tokens.length ? null : (
        <>
          <St.OtherTokensHeader>Other Tokens</St.OtherTokensHeader>
          <St.OtherTokens>
            {response?.tokens.length
              ? response.tokens.map((t) => <TokenCard key={t.name} token={t} />)
              : null}
          </St.OtherTokens>
        </>
      )}
    </St.OtherTokensContainer>
  );
};

export default OtherTokens;
