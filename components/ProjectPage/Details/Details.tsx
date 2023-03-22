import { Project } from 'components/LandingPage/Projects/projects';
import * as St from 'components/ProjectPage/ProjectHead.styled';

interface Props {
  project: Project;
}

const Details = ({ project }: Props): JSX.Element => {
  const {
    projectSlug,
    name,
    artist,
    website,
    image,
    description,
    interactivity,
    royalties,
  } = project;

  return (
    <St.DescContainer>
      <St.Image src={image} alt={'Project image'} />

      <St.DescSection>
        <St.DescTitle>Description</St.DescTitle>

        <St.Text>{description}</St.Text>

        {projectSlug === 'texture-and-hues' && (
          <a
            href="https://mattoapi.blob.core.windows.net/texture-and-hues-images/allSVGs.json"
            target="_blank"
            rel="noreferrer"
          >
            <St.LinkContainer>
              <St.Link>All SVGs</St.Link>
              <St.OpenInNewIcon />
            </St.LinkContainer>
          </a>
        )}
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
  );
};

export default Details;
