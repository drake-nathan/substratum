import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import { type Project } from 'components/LandingPage/Projects/projects';
import { icons, getProjectMarketLink } from './icons';
import * as St from './MarketIcons.styled';

interface Props {
  project: Project;
}

const ProjectMarkets = ({ project }: Props): JSX.Element => {
  const { openSeaSlug, contractAddress } = project;

  const iconSize = 20;

  return (
    <St.Container>
      {icons.map((icon) => {
        const { src, alt, id, tooltip } = icon;

        const link = getProjectMarketLink(icon, openSeaSlug, contractAddress);

        return (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            <Image id={id} src={src} alt={alt} width={iconSize} height={iconSize} />

            <Tooltip
              anchorId={id}
              content={tooltip}
              positionStrategy="fixed"
              place="bottom"
            />
          </a>
        );
      })}
    </St.Container>
  );
};

export default ProjectMarkets;
