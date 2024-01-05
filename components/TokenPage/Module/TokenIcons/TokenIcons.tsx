import type { Project } from "components/staticData/projects";
import type { IToken } from "services/azureApi/types";

import MarketIcons from "components/MarketIcons/MarketIcons";
import { Tooltip } from "react-tooltip";

import * as St from "./TokenIcons.styled";

interface Props {
  project: Project;
  token: IToken;
}

const TokenIcons = ({ project, token }: Props): JSX.Element => {
  const {
    generator_url: generatorUrl,
    image,
    svgGen,
    token_id: tokenId,
  } = token;
  const { isMobileControls } = project;

  const fullScreenUrl = generatorUrl || svgGen || image;

  const mobileUrl = generatorUrl ? new URL(generatorUrl) : null;

  if (mobileUrl) mobileUrl.searchParams.set("mobile", "true");

  return (
    <St.IconDiv>
      <MarketIcons project={project} tokenId={tokenId} />

      {fullScreenUrl && (
        <a href={fullScreenUrl} rel="noreferrer" target="_blank">
          <St.FullScreenIcon className="icon" id="fullscreen" />

          <Tooltip
            anchorId="fullscreen"
            content="View full screen"
            positionStrategy="fixed"
          />
        </a>
      )}

      {isMobileControls && mobileUrl && (
        <a href={mobileUrl.toString()} rel="noreferrer" target="_blank">
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
