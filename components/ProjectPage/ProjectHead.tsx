import * as St from './ProjectHead.styled';
import MarketIcons from 'components/MarketIcons/MarketIcons';
import { type Project } from 'components/LandingPage/Projects/projects';

interface Props {
  project: Project;
}

const ProjectHead = ({ project }: Props): JSX.Element => {
  const {
    name,
    artist,
    website,
    image,
    description,
    interactivity,
    royalties,
  } = project;

  return (
    <St.Container>
      <St.TitleContainer>
        <St.Title>{name}</St.Title>

        <St.BottomRow>
          <St.ArtistDiv>
            <St.By>By</St.By>

            <a href={website} target="_blank" rel="noreferrer">
              <St.ArtistName>{artist}</St.ArtistName>
            </a>
          </St.ArtistDiv>

          <MarketIcons project={project} />
        </St.BottomRow>
      </St.TitleContainer>

      <St.DescContainer>
        <St.Image src={image} alt={'Project image'} />

        <St.DescSection>
          <St.DescTitle>Description</St.DescTitle>

          <St.Text>{description}</St.Text>
        </St.DescSection>

        {interactivity && (
          <St.DescSection>
            <St.DescTitle>Interactivity</St.DescTitle>

            <St.Text>{interactivity}</St.Text>
          </St.DescSection>
        )}

        {royalties && (
          <St.DescSection>
            <St.DescTitle>Royalties</St.DescTitle>

            <St.Text>{royalties}</St.Text>
          </St.DescSection>
        )}
      </St.DescContainer>
    </St.Container>
  );
};

export default ProjectHead;
