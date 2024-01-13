import { MdMobileFriendly } from "react-icons/md";
import { MdOutlinePhoto } from "react-icons/md";
import { Tooltip } from "react-tooltip";

import type { Project } from "data/projects";
import type { IToken } from "services/azureApi/types";

import MarketIcons from "components/MarketIcons/MarketIcons";

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
  const { isMobileControls, projectSlug } = project;

  const is100xComposite =
    tokenId === 0 &&
    (projectSlug === "100x10x1-a-goerli" || projectSlug === "100x10x1-a");

  const fullScreenUrl = is100xComposite
    ? svgGen || image
    : generatorUrl || svgGen || image;

  const mobileUrl = generatorUrl ? new URL(generatorUrl) : null;

  if (mobileUrl) mobileUrl.searchParams.set("mobile", "true");

  return (
    <div className="flex items-baseline justify-between gap-2">
      <MarketIcons project={project} tokenId={tokenId} />

      {fullScreenUrl && (
        <a href={fullScreenUrl} rel="noreferrer" target="_blank">
          <MdOutlinePhoto className="text-2xl" id="fullscreen" />

          <Tooltip
            anchorId="fullscreen"
            content="View full screen"
            positionStrategy="fixed"
          />
        </a>
      )}

      {isMobileControls && mobileUrl && (
        <a href={mobileUrl.toString()} rel="noreferrer" target="_blank">
          <MdMobileFriendly className="text-2xl" id="mobile" />

          <Tooltip
            anchorId="mobile"
            content="Launch generator with mobile controls"
            positionStrategy="fixed"
          />
        </a>
      )}
    </div>
  );
};

export default TokenIcons;
