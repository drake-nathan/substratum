import { clsx } from "clsx";

import type { Project } from "data/projects";
import type { IToken } from "services/azureApi/types";

// import PriceIcon from 'public/icons/PriceIcon.svg';
import BottomBar from "./BottomBar";
import OtherTokens from "./OtherTokens/OtherTokens";
import TokenImage from "./TokenImage";
import TokenInfo from "./TokenInfo/TokenInfo";
import * as St from "./TokenModule.styled";
import st from "./tokenModule.module.css";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  project: Project;
  token: IToken;
}

const TokenModule = ({ project, token }: Props): JSX.Element => {
  const {
    additional_info,
    attributes,
    description,
    generator_url: generatorUrl,
    image,
    image_mid: imageMid,
    token_id: tokenId,
  } = token;
  const { aspectRatio, isZeroIndexed, projectSlug } = project;

  const currentSupply = useCurrentSupply(projectSlug);

  return (
    <div
      className="w-full px-8 py-6 sm:px-12 sm:py-8 md:px-20 lg:py-12"
      id="token-module-container"
    >
      <div className={clsx("grid grid-cols-2 gap-x-20", st["info-grid"])}>
        <St.TitleSection>
          <St.TokenName>{token.name}</St.TokenName>
          {/* TODO */}
          {/* <St.TokenOwner className="special-artist-name">
            Owner: 0x1abc7154748d1ce5144478cdeb574ae244b939b5
          </St.TokenOwner> */}
        </St.TitleSection>

        <St.ImageSection>
          <TokenImage
            aspectRatio={aspectRatio}
            generatorUrl={generatorUrl}
            image={image}
            imageMid={imageMid}
          />
          <BottomBar project={project} token={token} />
        </St.ImageSection>

        <St.InfoSection>
          <TokenInfo
            additionalDescription={additional_info?.additional_description}
            description={description}
            poem={additional_info?.poem}
            projectSlug={projectSlug}
            traits={attributes}
          />
        </St.InfoSection>

        <St.StatsSection>
          <St.TokenIndex>
            {isZeroIndexed ? tokenId + 1 : tokenId} of{" "}
            {currentSupply && intlNumberFormat(currentSupply)}
          </St.TokenIndex>
          {/* TODO needs api data for transactions on a token */}
          {/* <St.MintDateTime>Minted Apr 3, 2023, 9:23pm GMT-5</St.MintDateTime> */}
        </St.StatsSection>

        {/* <St.BuyToken>
          <St.InfoTitle>Price</St.InfoTitle>
          <St.Price>
            20
            <PriceIcon className="coins" />
          </St.Price>
          <St.BuyButton onClick={() => alert('Coming soon!')}>
            Connect to Buy
          </St.BuyButton>
        </St.BuyToken> */}
      </div>

      <OtherTokens project={project} token={token} />
    </div>
  );
};

export default TokenModule;
