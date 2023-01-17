import React from 'react';
import { IToken } from 'services/azureApi/types';
import * as St from './TopBar.styled';

interface Props {
  token: IToken;
}

const TopBar: React.FC<Props> = ({ token }) => {
  const { token_id: tokenId, generator_url: generatorUrl, image } = token;

  const fullScreenUrl = generatorUrl || image;

  return (
    <St.Container>
      <St.TokenId>#{tokenId}</St.TokenId>

      <St.IconDiv>
        <a href={fullScreenUrl} target="_blank" rel="noreferrer">
          <St.FullScreenIcon className="icon" />
        </a>

        <St.MobileIcon className="icon mobile" />
      </St.IconDiv>
    </St.Container>
  );
};

export default TopBar;
