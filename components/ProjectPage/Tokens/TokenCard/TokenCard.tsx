import Link from 'next/link';
import React from 'react';
import { TokenAbbr } from 'services/azureApi/types';
import * as St from './TokenCard.styled';

interface Props {
  token: TokenAbbr;
}

const TokenCard: React.FC<Props> = ({ token }) => {
  const {
    name,
    image,
    image_mid,
    token_id,
    project_slug,
    generator_url,
    script_inputs: { transfer_count, level_shift },
  } = token;

  const imgSrc = image_mid || image;
  const tokenLink = `/project/${project_slug}/token/${token_id}`;

  return (
    <St.Container>
      <St.Wrapper>
        <a href={generator_url} target="_blank" rel="noreferrer">
          <St.PreviewImage src={imgSrc} />
        </a>

        <St.DescriptionDiv>
          <a href={generator_url} target="_blank" rel="noreferrer">
            <St.Title>{name}</St.Title>
          </a>
          {level_shift && <St.Text>Level Shift: {level_shift}</St.Text>}
          <St.Text>Transfers: {transfer_count}</St.Text>
        </St.DescriptionDiv>
      </St.Wrapper>
    </St.Container>
  );
};

export default TokenCard;
