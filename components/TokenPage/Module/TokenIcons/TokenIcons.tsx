import MarketIcons from "components/MarketIcons/MarketIcons";
import { type Project } from "components/staticData/projects";
import { Tooltip } from "react-tooltip";
import type { IToken } from "services/azureApi/types";

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
