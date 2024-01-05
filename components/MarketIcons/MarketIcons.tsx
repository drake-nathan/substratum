import type { Project } from "components/staticData/projects";

import { Tooltip } from "react-tooltip";

import * as St from "./MarketIcons.styled";
import {
  Market,
  getProjectMarketLink,
  getTokenMarketLink,
  icons,
} from "./icons";

interface Props {
  project: Project;
  tokenId?: number | string;
}

const MarketIcons = ({ project, tokenId }: Props): JSX.Element => {
  const { contractAddress, openSeaSlug } = project;

  // need this since zero is falsy
  const isToken = tokenId !== undefined;

  return (
    <St.Container>
      {icons.map((icon) => {
        // skip etherscan for token version
        if (icon.market === Market.Etherscan && isToken) return null;
        const {
          altCollection,
          altToken,
          id,
          src: Icon,
          tooltipCollection,
          tooltipToken,
        } = icon;

        const alt = isToken ? altToken : altCollection;
        const tooltip = isToken ? tooltipToken : tooltipCollection;
        const link = isToken
          ? getTokenMarketLink(icon, contractAddress, tokenId)
          : getProjectMarketLink(icon, openSeaSlug, contractAddress);

        return (
          <a href={link} key={id} rel="noreferrer" target="_blank">
            <Icon alt={alt} className="icon" id={id} />

            <Tooltip
              anchorId={id}
              content={tooltip}
              place={isToken ? "top" : "bottom"}
              positionStrategy="fixed"
            />
          </a>
        );
      })}
    </St.Container>
  );
};

export default MarketIcons;
