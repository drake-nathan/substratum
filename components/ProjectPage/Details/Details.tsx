import { Project } from 'components/LandingPage/Projects/projects';
import ExpandIcon from 'public/icons/ExpandIcon.svg';
import * as St from 'components/ProjectPage/Details/Details.styled';
import { projects } from 'components/LandingPage/Projects/projects';
import CollectionCard from './OtherCollections/CollectionCard';

interface Props {
  project: Project;
}

const findScriptType = (type: string | undefined) => {
  switch (type) {
    case 'p5':
      return 'Javascript, Shaders (GLSL)';
    case 'p5.js':
      return 'Javascript, Shaders (GLSL)';
    case 'solidity':
      return 'Solidity';
    default:
      return 'No information';
  }
}; // TODO make an enum for the script types

const getRelatedCollections = (project: Project) => {
  const projectIndex = projects.indexOf(project);
  const initialProjects = projects.slice(projectIndex + 1, projectIndex + 4);
  if (initialProjects.length < 3) {
    return [
      ...initialProjects,
      ...projects.slice(0, 3 - initialProjects.length),
    ];
  }
  return initialProjects;
};

const Details = ({ project }: Props): JSX.Element => {
  const {
    projectSlug,
    name,
    artist,
    website,
    scriptType,
    license,
    image,
    description,
    interactivity,
    royalties,
  } = project;

  return (
    <St.DetailContainer>
      <St.ProjectImage>
        <St.Image src={image} alt={'Project image'} />
        <St.ProjectImageNameContainer>
          <St.ProjectImageName>{name}</St.ProjectImageName>
          <ExpandIcon className="expand"></ExpandIcon>
        </St.ProjectImageNameContainer>
      </St.ProjectImage>

      <St.Details>
        <St.AboutSection>
          <St.DescTitle>About {name}</St.DescTitle>
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
        </St.AboutSection>
        <St.OtherInfo>
          <St.DescTitle>Collection Details</St.DescTitle>

          {/* FIXME needs real detail data from the API*/}
          <St.Text>Algorithmic edition of 128</St.Text>
          {/* FIXME needs real detail data from the API*/}
          <St.Text>March 29, 2023, 9:00pm GMT-4</St.Text>
          <St.SmallDescTitle>Tools</St.SmallDescTitle>
          <St.Text>{findScriptType(scriptType)}</St.Text>
          <St.SmallDescTitle>Notes</St.SmallDescTitle>

          {/* FIXME needs real detail data from the API*/}
          <St.Text>
            25% of all sales will be donated to four organizations that advance
            creative and career oportunities for under-represented groups in
            Canada: SCWST, Wapikoni Mobile, Nikamowin, and Pathways to
            Education.
          </St.Text>
          <St.SmallDescTitle>License</St.SmallDescTitle>
          <St.Text>{license || 'No information'}</St.Text>
        </St.OtherInfo>
      </St.Details>

      {/* <St.Functionality>
        {interactivity && }
      </St.Functionality> */}

      <St.OtherCollectionsContainer>
        <St.OtherCollectionsHeader>Other Collections</St.OtherCollectionsHeader>
        <St.OtherCollections>
          {getRelatedCollections(project).map((p, index) => (
            <CollectionCard key={index} project={p}></CollectionCard>
          ))}
        </St.OtherCollections>
      </St.OtherCollectionsContainer>
    </St.DetailContainer>
  );
};

export default Details;
