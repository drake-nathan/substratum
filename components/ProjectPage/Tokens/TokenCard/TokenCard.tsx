import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { TokenAbbr } from 'services/azureApi/types';
import * as St from './TokenCard.styled';
import { useTheme } from 'styled-components';

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
    script_inputs: { transfer_count: transferCount, level_shift: levelShift },
  } = token;

  const { isMiniCard } = useTheme();

  const imgSrc = imageMid || image;
  const tokenLink = `/project/${projectSlug}/token/${tokenId}`;
  const alt = `${name} token`;

  const aspectRatio = projectSlug === 'negative-carbon' ? 1.7777777777777 : 1;
  const width = isMiniCard ? 170 : 300;
  const height = width / aspectRatio;

  return (
    <St.Container>
      <St.Wrapper>
        <Link href={tokenLink}>
          <Image src={imgSrc} alt={alt} width={width} height={height} />
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
