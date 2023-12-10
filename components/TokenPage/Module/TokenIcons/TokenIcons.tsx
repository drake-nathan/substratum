import MarketIcons from "components/MarketIcons/MarketIcons";
import { type Project } from "components/staticData/projects";
import { Tooltip } from "react-tooltip";
import { type IToken, ProjectSlug } from "services/azureApi/types";

import CompositeFullScreen from "./CompositeFullScreen";
import * as St from "./TokenIcons.styled";

interface Props {
  token: IToken;
  project: Project;
}

const TokenIcons = ({ token, project }: Props): JSX.Element => {
  const {
    token_id: tokenId,
    generator_url: generatorUrl,
    svgGen,
    image,
    project_slug: projectSlug,
  } = token;
  const { isMobileControls } = project;

  const fullScreenUrl = generatorUrl || svgGen || image;

  const mobileUrl = generatorUrl ? new URL(generatorUrl) : null;

  if (mobileUrl) mobileUrl.searchParams.set("mobile", "true");

  const isCompositeImage =
    projectSlug === ProjectSlug["100x10x1-a-goerli"] && tokenId === 0;

  return (
    <St.IconDiv>
      <MarketIcons project={project} tokenId={tokenId} />

      {fullScreenUrl && (
        <a href={fullScreenUrl} target="_blank" rel="noreferrer">
          <St.FullScreenIcon className="icon" id="fullscreen" />

          <Tooltip
            anchorId="fullscreen"
            content="View full screen"
            positionStrategy="fixed"
          />
        </a>
      )}

      {isCompositeImage && <CompositeFullScreen />}

      {isMobileControls && mobileUrl && (
        <a href={mobileUrl.toString()} target="_blank" rel="noreferrer">
          <St.MobileIcon className="icon mobile" id="mobile" />

          <Tooltip
            anchorId="mobile"
            content="Launch generator with mobile controls"
            positionStrategy="fixed"
          />
        </a>
      )}
    </St.IconDiv>
  );
};

export default TokenIcons;
