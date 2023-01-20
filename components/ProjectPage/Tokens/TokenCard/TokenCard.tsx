import Link from 'next/link';
import React from 'react';
import { TokenAbbr } from 'services/azureApi/types';
import * as St from './TokenCard.styled';

interface Props {
  token: TokenAbbr;
  isTokenIdInTitle: boolean;
}

const TokenCard: React.FC<Props> = ({ token, isTokenIdInTitle }) => {
  const {
    name,
    image,
    image_mid: imageMid,
    token_id: tokenId,
    project_slug: projectSlug,
    generator_url: generatorUrl,
    script_inputs: { transfer_count: transferCount, level_shift: levelShift },
  } = token;

  const imgSrc = imageMid || image;
  const tokenLink = `/project/${projectSlug}/token/${tokenId}`;

  return (
    <St.Container>
      <St.Wrapper>
        <Link href={tokenLink}>
          <St.PreviewImage src={imgSrc} />
        </Link>

        <St.DescriptionDiv>
          <Link href={tokenLink}>
            <St.Title>{name}</St.Title>
          </Link>
          {!isTokenIdInTitle && <St.Text>Token ID: {tokenId}</St.Text>}
          {levelShift === undefined ? null : <St.Text>Level Shift: {levelShift}</St.Text>}
          {transferCount === undefined ? null : (
            <St.Text>Transfers: {transferCount}</St.Text>
          )}
        </St.DescriptionDiv>
      </St.Wrapper>
    </St.Container>
  );
};

export default TokenCard;
