import React from 'react';
import Image from 'next/image';
import TopBar from './TopBar/TopBar';
import * as St from './TokenModule.styled';
import { TokenAbbr } from 'services/azureApi/types';

interface Props {
  token: TokenAbbr;
}

const TokenModule: React.FC<Props> = ({ token }) => {
  const { token_id: tokenId } = token;

  return (
    <St.Container>
      <TopBar tokenId={tokenId} />

      <St.MainSection>
        <Image
          src="https://arweave.net/dtEayxAD2Aknd8g8WWyErEX37kesMRsJhbopwDYPhdo/1.png"
          alt="Token Image"
          width={500}
          height={500}
        />
      </St.MainSection>
    </St.Container>
  );
};

export default TokenModule;
