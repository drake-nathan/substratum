import React from 'react';
import Link from 'next/link';
import type { TokenAbbr } from 'services/azureApi/types';
import * as St from './TokenCard.styled';

interface Props {
  token: TokenAbbr;
  isTokenIdInTitle: boolean;
  aspectRatio: number;
}

const TokenCard: React.FC<Props> = ({
  token,
  isTokenIdInTitle,
  aspectRatio,
}) => {
  const {
    name,
    image,
    image_mid: imageMid,
    image_small: imageSmall,
    token_id: tokenId,
    project_slug: projectSlug,
    script_inputs: scriptInputs,
  } = token;

  const imgSrc = imageSmall || imageMid || image;
  const tokenLink = `/project/${projectSlug}/token/${tokenId}`;
  const alt = `${name} token`;

  return (
    <St.Container>
      <St.Wrapper>
        <Link href={tokenLink}>
          <St.PreviewImage src={imgSrc} alt={alt} />
        </Link>

        <St.DescriptionDiv>
          <Link href={tokenLink}>
            <St.Title>{name}</St.Title>
          </Link>

          {!isTokenIdInTitle && <St.Text>Token ID: {tokenId}</St.Text>}

          {scriptInputs?.level_shift === undefined ? null : (
            <St.Text>Level Shift: {scriptInputs.level_shift}</St.Text>
          )}

          {scriptInputs?.transfer_count === undefined ? null : (
            <St.Text>Transfers: {scriptInputs.transfer_count}</St.Text>
          )}
        </St.DescriptionDiv>
      </St.Wrapper>
    </St.Container>
  );
};

export default TokenCard;
