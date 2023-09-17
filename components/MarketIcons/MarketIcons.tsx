import { type Project } from "components/staticData/projects";
import { Tooltip } from "react-tooltip";

import {
  getProjectMarketLink,
  getTokenMarketLink,
  icons,
  Market,
} from "./icons";
import * as St from "./MarketIcons.styled";

interface Props {
  project: Project;
  tokenId?: number | string;
}

const MarketIcons = ({ project, tokenId }: Props): JSX.Element => {
  const { openSeaSlug, contractAddress } = project;

  // need this since zero is falsy
  const isToken = tokenId !== undefined;

  return (
    <St.Container>
      {icons.map((icon) => {
        // skip etherscan for token version
        if (icon.market === Market.Etherscan && isToken) return null;
        const {
          id,
          altCollection,
          altToken,
          tooltipCollection,
          tooltipToken,
          src: Icon,
        } = icon;

        const alt = isToken ? altToken : altCollection;
        const tooltip = isToken ? tooltipToken : tooltipCollection;
        const link = isToken
          ? getTokenMarketLink(icon, contractAddress, tokenId)
          : getProjectMarketLink(icon, openSeaSlug, contractAddress);

        return (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            <Icon id={id} alt={alt} className="icon" />

            <Tooltip
              anchorId={id}
              content={tooltip}
              positionStrategy="fixed"
              place={isToken ? "top" : "bottom"}
            />
          </a>
        );
      })}
    </St.Container>
  );
};

export default MarketIcons;
