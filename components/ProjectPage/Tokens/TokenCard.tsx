import Link from "next/link";

import type { TokenAbbr } from "services/azureApi/types";

interface Props {
  isTokenIdInTitle: boolean;
  token: TokenAbbr;
}

const TokenCard = ({ isTokenIdInTitle, token }: Props): JSX.Element => {
  const {
    image,
    image_mid: imageMid,
    image_small: imageSmall,
    name,
    project_slug: projectSlug,
    script_inputs: scriptInputs,
    token_id: tokenId,
  } = token;

  const imgSrc = imageSmall || imageMid || image;
  const tokenLink = `/project/${projectSlug}/token/${tokenId}`;
  const alt = `${name} token`;

  return (
    <div className="flex w-full flex-col rounded-b-sm border border-black dark:border-white">
      <Link href={tokenLink}>
        <img alt={alt} className="h-auto w-full cursor-pointer" src={imgSrc} />
      </Link>

      <div className="flex flex-col items-start justify-between gap-2 p-4">
        <Link href={tokenLink}>
          <h4 className="cursor-pointer text-lg">{name}</h4>
          {/* TODO - needs real owner data */}
          {/* <p className="max-w-36 truncate text-base font-light italic">
            Owner: 0x1abc7154748d1ce5144478cdeb574ae244b939b5
          </p> */}
        </Link>

        {!isTokenIdInTitle && <p>Token ID: {tokenId}</p>}

        {scriptInputs?.level_shift === undefined ? null : (
          <p>
            Level Shift:
            {scriptInputs.level_shift}
          </p>
        )}

        {scriptInputs?.transfer_count === undefined ? null : (
          <p>
            Transfers:
            {scriptInputs.transfer_count}
          </p>
        )}
      </div>
    </div>
  );
};

export default TokenCard;
