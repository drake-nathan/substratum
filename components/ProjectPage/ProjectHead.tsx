import * as St from './ProjectHead.styled';
import MarketIcons from 'components/MarketIcons/MarketIcons';
import { type Project } from 'components/LandingPage/Projects/projects';

interface Props {
  project: Project;
}

const ProjectHead = ({ project }: Props): JSX.Element => {
  const {
    projectSlug,
    name,
    artist,
    website,
    currentSupply,
    maxSupply,
    image,
    description,
    interactivity,
    royalties,
  } = project;

  return (
    <St.Container>
      <St.Title>{name}</St.Title>
      <St.ArtistDiv>
        <St.By>By</St.By>{' '}
        <a href={website} target="_blank" rel="noreferrer">
          <St.ArtistName>{artist}</St.ArtistName>
        </a>
      </St.ArtistDiv>

      <MarketIcons project={project} />
      <St.TokenStatus>
        {currentSupply}/{maxSupply} Tokens Minted
      </St.TokenStatus>
    </St.Container>
  );
};

export default ProjectHead;
