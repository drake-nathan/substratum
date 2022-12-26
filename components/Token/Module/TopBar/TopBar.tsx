import React from 'react';
import * as St from './TopBar.styled';

interface Props {
  tokenId: string;
}

const TopBar: React.FC<Props> = ({ tokenId }) => {
  return (
    <St.Container>
      <St.TokenId>#{tokenId}</St.TokenId>
      <St.IconDiv>
        <St.FullScreenIcon className="icon" />
        <St.MobileIcon className="icon mobile" />
      </St.IconDiv>
    </St.Container>
  );
};

export default TopBar;
