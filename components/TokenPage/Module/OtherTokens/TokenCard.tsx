import Link from "next/link";
import { type TokenAbbr } from "services/azureApi/types";

import * as St from "./TokenCard.styled";

interface Props {
  token: TokenAbbr;
}

const TokenCard = ({ token }: Props): JSX.Element => {
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
    <St.Wrapper>
      <Link href={tokenLink}>
        <St.PreviewImage alt={alt} src={imgSrc} />
      </Link>

      <St.DescriptionDiv>
        <Link href={tokenLink}>
          <St.Title>{name}</St.Title>
          {/* <St.Owner>By: 0x1abc7154748d1ce5144478cdeb574ae244b939b5</St.Owner> */}
          {/* FIXME - needs real owner data */}
        </Link>

        <St.Text>Token ID: {tokenId}</St.Text>

        {scriptInputs?.level_shift === undefined ? null : (
          <St.Text>Level Shift: {scriptInputs.level_shift}</St.Text>
        )}

        {scriptInputs?.transfer_count === undefined ? null : (
          <St.Text>Transfers: {scriptInputs.transfer_count}</St.Text>
        )}
      </St.DescriptionDiv>
    </St.Wrapper>
  );
};

export default TokenCard;
