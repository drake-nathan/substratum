import React, { useState } from 'react';
import TokenModule from './Module/TokenModule';
import { Project } from 'components/LandingPage/Projects/projects';
import * as St from './TokenPage.styled';
import { TokenAbbr } from 'services/azureApi/types';

interface Props {
  project: Project;
  tokenId: string;
}

const TokenPage: React.FC<Props> = ({ project, tokenId }) => {
  const { name } = project;

  const [token, setToken] = useState<TokenAbbr>();

  return (
    <St.Container>
      <St.Title>{name}</St.Title>

      {token && <TokenModule token={token} />}
    </St.Container>
  );
};

export default TokenPage;
