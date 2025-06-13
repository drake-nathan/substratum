import type { Project } from "data/projects";

import React from "react";
import { Tooltip } from "react-tooltip";

import {
  getProjectMarketLink,
  getTokenMarketLink,
  icons,
  Market,
} from "./icons";

interface Props {
  project: Project;
  tokenId?: number | string;
}

const MarketIcons = ({ project, tokenId }: Props): React.JSX.Element => {
  const { contractAddress } = project;

  // need this since zero is falsy
  const isToken = tokenId !== undefined;

  return (
    <div className="relative mb-1 flex items-center gap-2">
      {icons.map((icon) => {
        // skip etherscan for token version
        if (icon.market === Market.Etherscan && isToken) {
          return null;
        }

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
        const link =
          isToken ?
            getTokenMarketLink({ address: contractAddress, icon, tokenId })
          : getProjectMarketLink({
              address: contractAddress,
              icon,
            });

        return (
          <a href={link} key={id} rel="noreferrer" target="_blank">
            <Icon
              alt={alt}
              className="text-xl hover:text-hover-light dark:hover:text-hover-dark"
              id={id}
            />

            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-deprecated
              anchorId={id}
              content={tooltip}
              place={isToken ? "top" : "bottom"}
              positionStrategy="fixed"
            />
          </a>
        );
      })}
    </div>
  );
};

export default MarketIcons;
