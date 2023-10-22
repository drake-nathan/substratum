import type { Project } from "components/staticData/projects";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCollectionTokens } from "services/azureApi/fetches";
import type { CollectionResponse, IToken } from "services/azureApi/types";

import * as St from "./OtherTokens.styled";
import TokenCard from "./TokenCard";

interface Props {
  token: IToken;
  project: Project;
}

const OtherTokens = ({ token, project }: Props): JSX.Element => {
  const { projectSlug, currentSupply } = project;
  const { token_id: tokenId } = token;

  const skip =
    currentSupply && currentSupply < tokenId + 3 ? currentSupply - 3 : tokenId;

  const {
    isLoading,
    error,
    data: response,
    refetch,
  } = useQuery<CollectionResponse, Error>("tokens", () =>
    fetchCollectionTokens(projectSlug, 3, skip, "asc", "tokenId", null),
  );

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
