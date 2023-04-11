import MarketIcons from 'components/MarketIcons/MarketIcons';
import { type Project } from 'components/staticData/projects';
import * as St from './ProjectHead.styled';

interface Props {
  project: Project;
}

const ProjectHead = ({ project }: Props): JSX.Element => {
  const { name, artist, website, currentSupply, maxSupply } = project;

  return (
    <St.Container>
      <St.Title>{name}</St.Title>
      <St.ArtistDiv>
        <St.By>By</St.By>{' '}
        <a href={website} target="_blank" rel="noreferrer">
          <St.ArtistName>{artist}</St.ArtistName>
        </a>
      </St.ArtistDiv>

      <St.MarketIconsWrapper>
        <MarketIcons project={project} />
      </St.MarketIconsWrapper>

      <St.TokenStatus>
        {currentSupply}/{maxSupply} Tokens Minted
      </St.TokenStatus>
    </St.Container>
  );
};

export default ProjectHead;
