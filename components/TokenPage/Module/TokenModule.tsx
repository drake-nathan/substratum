import React, { useEffect, useState } from "react";
import type { IToken } from "services/azureApi/types";
import { type Project } from "components/staticData/projects";
import { useWindowSize } from "hooks/useWindowSize";
import Generator from "components/Generator/Generator";
// import PriceIcon from 'public/icons/PriceIcon.svg';
import BottomBar from "./BottomBar/BottomBar";
import TokenInfo from "./TokenInfo/TokenInfo";
import OtherTokens from "./OtherTokens/OtherTokens";
import * as St from "./TokenModule.styled";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  token: IToken;
  project: Project;
}

const TokenModule = ({ token, project }: Props): JSX.Element => {
  const {
    image,
    image_mid: imageMid,
    generator_url: generatorUrl,
    attributes,
    token_id: tokenId,
    description,
    additional_info,
  } = token;
  const { projectSlug, aspectRatio, currentSupply, isZeroIndexed } = project;

  const { windowWidth } = useWindowSize();

  const [width, setWidth] = useState<number>(600);
  const height = aspectRatio ? width / aspectRatio : width;

  useEffect(() => {
    if (windowWidth > 1350) setWidth(600);
    else if (windowWidth <= 1350 && windowWidth > 1250) setWidth(550);
    else if (windowWidth <= 1250 && windowWidth > 1150) setWidth(500);
    else if (windowWidth <= 1150 && windowWidth > 1070) setWidth(400);
    else if (windowWidth <= 1070 && windowWidth > 1000) setWidth(350);
    else if (windowWidth <= 1000 && windowWidth > 800) setWidth(600);
    else if (windowWidth <= 800 && windowWidth > 650) setWidth(500);
    else if (windowWidth <= 650 && windowWidth > 550) setWidth(400);
    else if (windowWidth <= 550 && windowWidth > 450) setWidth(375);
    else if (windowWidth <= 450 && windowWidth > 400) setWidth(350);
    else setWidth(325);
  }, [windowWidth]);

  return (
    <St.Container>
      <St.InfoGrid>
        <St.TitleSection>
          <St.TokenName>{token.name}</St.TokenName>
          {/* FIXME */}
          {/* <St.TokenOwner className="special-artist-name">
            Owner: 0x1abc7154748d1ce5144478cdeb574ae244b939b5
          </St.TokenOwner> */}
        </St.TitleSection>

        <St.ImageSection>
          {generatorUrl ? (
            <Generator
              generatorUrl={generatorUrl}
              height={height}
              width={width}
            />
          ) : (
            <St.Image
              src={imageMid || image}
              alt="Token Image"
              $aspectRatio={aspectRatio}
            />
          )}
          <BottomBar token={token} project={project} />
        </St.ImageSection>

        <St.InfoSection>
          <TokenInfo
            projectSlug={projectSlug}
            traits={attributes}
            description={description}
            poem={additional_info?.poem}
            additionalDescription={additional_info?.additional_description}
          />
        </St.InfoSection>

        <St.StatsSection>
          <St.TokenIndex>
            {isZeroIndexed ? tokenId + 1 : tokenId} of{" "}
            {currentSupply && intlNumberFormat(currentSupply)}
          </St.TokenIndex>
          {/* FIXME needs api data for transactions on a token */}
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
      </St.InfoGrid>

      <OtherTokens project={project} token={token} />
    </St.Container>
  );
};

export default TokenModule;
