import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import { type Project } from 'components/LandingPage/Projects/projects';
import {
  icons,
  getProjectMarketLink,
  Market,
  getTokenMarketLink,
} from './icons';
import * as St from './MarketIcons.styled';

interface Props {
  project: Project;
  tokenId?: number | string;
}

const MarketIcons = ({ project, tokenId }: Props): JSX.Element => {
  const { openSeaSlug, contractAddress } = project;

  const iconSize = 20;

  // need this since zero is falsy
  const isToken = tokenId !== undefined;

  return (
    <St.Container>
      {icons.map((icon) => {
        // skip etherscan for token version
        if (icon.market === Market.Etherscan && isToken) return null;
        const {
          src,
          id,
          altCollection,
          altToken,
          tooltipCollection,
          tooltipToken,
        } = icon;

        const Svg = src;

        console.log(icon.src.src);

        const alt = isToken ? altToken : altCollection;
        const tooltip = isToken ? tooltipToken : tooltipCollection;
        const link = isToken
          ? getTokenMarketLink(icon, contractAddress, tokenId)
          : getProjectMarketLink(icon, openSeaSlug, contractAddress);

        return (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            {/* <Image
              id={id}
              alt={alt}
              src={src.src}
              width={iconSize}
              height={iconSize}
            /> */}
            <Svg id={id} width={iconSize} height={iconSize}></Svg>

            <Tooltip
              anchorId={id}
              content={tooltip}
              positionStrategy="fixed"
              place={isToken ? 'top' : 'bottom'}
            />
          </a>
        );
      })}
    </St.Container>
  );
};

export default MarketIcons;
