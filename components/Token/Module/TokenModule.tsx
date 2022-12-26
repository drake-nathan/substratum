import React from 'react';
import Image from 'next/image';
import TopBar from './TopBar/TopBar';
import * as St from './TokenModule.styled';

interface Props {
  tokenId: string;
}

const TokenModule: React.FC<Props> = ({ tokenId }) => {
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
