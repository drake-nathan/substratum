import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import { type Project } from 'components/LandingPage/Projects/projects';
import { icons, getProjectMarketLink, Market, getTokenMarketLink } from './icons';
import * as St from './MarketIcons.styled';

interface Props {
  project: Project;
  tokenId?: number | string;
}

const MarketIcons = ({ project, tokenId }: Props): JSX.Element => {
  const { openSeaSlug, contractAddress } = project;

  const iconSize = 20;

  return (
    <St.Container>
      {icons.map((icon) => {
        // skip etherscan for token version
        if (icon.market === Market.Etherscan && tokenId) return null;
        const { src, id, altCollection, altToken, tooltipCollection, tooltipToken } =
          icon;

        const alt = tokenId ? altToken : altCollection;
        const tooltip = tokenId ? tooltipToken : tooltipCollection;
        const link = tokenId
          ? getTokenMarketLink(icon, contractAddress, tokenId)
          : getProjectMarketLink(icon, openSeaSlug, contractAddress);

        return (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            <Image id={id} src={src} alt={alt} width={iconSize} height={iconSize} />

            <Tooltip
              anchorId={id}
              content={tooltip}
              positionStrategy="fixed"
              place={tokenId ? 'top' : 'bottom'}
            />
          </a>
        );
      })}
    </St.Container>
  );
};

export default MarketIcons;
