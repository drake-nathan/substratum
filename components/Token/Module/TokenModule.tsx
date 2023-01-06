import React from 'react';
import Image from 'next/image';
import type { IToken } from 'services/azureApi/types';
import TopBar from './TopBar/TopBar';
import * as St from './TokenModule.styled';

interface Props {
  token: IToken;
}

const TokenModule: React.FC<Props> = ({ token }) => {
  const { token_id: tokenId, image, image_mid: imageMid } = token;

  return (
    <St.Container>
      <TopBar tokenId={tokenId} />

      <St.MainSection>
        <Image src={imageMid || image} alt="Token Image" width={500} height={500} />
      </St.MainSection>
    </St.Container>
  );
};

export default TokenModule;
