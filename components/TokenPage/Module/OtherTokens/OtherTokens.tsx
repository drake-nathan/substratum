import { Project } from "components/staticData/projects";
import { IToken, TokenAbbr } from "services/azureApi/types";
import { fetchCollectionTokens } from "services/azureApi/fetches";
import { useEffect, useState } from "react";
import * as St from "./OtherTokens.styled";
import TokenCard from "./TokenCard";

interface Props {
  token: IToken;
  project: Project;
}

const getOtherTokens = async (project: Project, token: IToken) => {
  const tokenNumber = project.isZeroIndexed
    ? token.token_id + 1
    : token.token_id;

  const data = await fetchCollectionTokens(
    project.projectSlug,
    3,
    tokenNumber,
    "asc",
    "tokenId",
    null
  );

  return data.tokens;
};

const OtherTokens = ({ token, project }: Props): JSX.Element => {
  const [otherTokens, setOtherTokens] = useState<TokenAbbr[]>([]);

  useEffect(() => {
    getOtherTokens(project, token).then((data) => setOtherTokens(data));
  }, [project, token]);

  return (
    <St.OtherTokensContainer>
      <St.OtherTokensHeader>Other Tokens</St.OtherTokensHeader>
      <St.OtherTokens>
        {otherTokens.map((t) => (
          <TokenCard key={t.name} token={t} />
        ))}
      </St.OtherTokens>
    </St.OtherTokensContainer>
  );
};

export default OtherTokens;
