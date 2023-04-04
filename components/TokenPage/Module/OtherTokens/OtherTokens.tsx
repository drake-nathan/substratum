import { Project } from 'components/_staticData/projects';
import { IToken, TokenAbbr } from 'services/azureApi/types';
import * as St from './OtherTokens.styled';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import TokenCard from './TokenCard';
import { useEffect, useState } from 'react';

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
    'asc',
    'tokenId',
    null,
  );

  return data.tokens;
};

const OtherTokens = ({ token, project }: Props): JSX.Element => {
  const [otherTokens, setOtherTokens] = useState<TokenAbbr[]>([]);

  useEffect(() => {
    getOtherTokens(project, token).then((data) => setOtherTokens(data));
  }, []);

  return (
    <St.OtherTokensContainer>
      <St.OtherTokensHeader>Other Tokens</St.OtherTokensHeader>
      <St.OtherTokens>
        {otherTokens.map((t) => (
          <TokenCard key={t.name} token={t}></TokenCard>
        ))}
      </St.OtherTokens>
    </St.OtherTokensContainer>
  );
};

export default OtherTokens;
