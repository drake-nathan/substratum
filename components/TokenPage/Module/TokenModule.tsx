import type { Project } from "data/projects";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import type { IToken } from "services/azureApi/types";
import { intlNumberFormat } from "utils/helpers";

// import PriceIcon from 'public/icons/PriceIcon.svg';
import BottomBar from "./BottomBar/BottomBar";
import OtherTokens from "./OtherTokens/OtherTokens";
import TokenImage from "./TokenImage";
import TokenInfo from "./TokenInfo/TokenInfo";
import * as St from "./TokenModule.styled";

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
