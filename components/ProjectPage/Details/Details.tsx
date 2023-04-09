import { useState } from 'react';
import { Project, projects } from 'components/staticData/projects';
import ExpandIcon from 'public/icons/ExpandIcon.svg';
import * as St from 'components/ProjectPage/Details/Details.styled';
import { drawOrder as dO } from 'components/staticData/100x10x1A/order';
import Legend from '../LayeredCollection/Legend/Legend';

import CollectionCard from './OtherCollections/CollectionCard';
import Shuffler from '../LayeredCollection/Shuffler/Shuffler';
import LayeredCollection from '../LayeredCollection/LayeredCollection';

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
    scriptType,
    license,
    image,
    description,
    interactivity,
    royalties,
  } = project;

  const [drawOrder, setDrawOrder] = useState(dO);
  const [viewTokenID, setViewTokenID] = useState(0);

  return (
    <St.DetailGrid>
      <St.ProjectImage>
        {projectSlug === '100x10x1-a' ? (
          <LayeredCollection
            viewTokenID={viewTokenID}
            setViewTokenID={setViewTokenID}
            drawOrder={drawOrder}
          ></LayeredCollection>
        ) : (
          <>
            <St.Image src={image} alt="Project image" />
            <St.ProjectImageNameContainer>
              {/* FIXME needs real token ID data from the API */}
              <St.ProjectImageName>{`${name} #1`}</St.ProjectImageName>
              <ExpandIcon className="expand" />
            </St.ProjectImageNameContainer>
          </>
        )}
      </St.ProjectImage>

      <St.Details>
        {/** FIXME - render shuffler if the project is of a certain class */}
        {projectSlug === '100x10x1-a' && (
          <Shuffler
            setDrawOrder={setDrawOrder}
            drawOrder={drawOrder}
            setViewTokenID={setViewTokenID}
          ></Shuffler>
        )}
        <St.AboutSection>
          <St.DescTitle>
            About
            {name}
          </St.DescTitle>
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

          {/* FIXME needs real detail data from the API */}
          <St.Text>Algorithmic edition of 128</St.Text>
          {/* FIXME needs real detail data from the API */}
          <St.Text>March 29, 2023, 9:00pm GMT-4</St.Text>
          <St.SmallDescTitle>Tools</St.SmallDescTitle>
          <St.Text>{findScriptType(scriptType)}</St.Text>
          <St.SmallDescTitle>Notes</St.SmallDescTitle>

          {/* FIXME needs real detail data from the API */}
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

      {projectSlug === '100x10x1-a' && <Legend />}

      <St.Functionality>
        {interactivity && (
          <St.FuncSection>
            <St.DescTitle>Interactivity</St.DescTitle>

            <St.Text>{interactivity}</St.Text>
          </St.FuncSection>
        )}

        {royalties && (
          <St.FuncSection>
            <St.DescTitle>Royalties</St.DescTitle>

            <St.Text>{royalties}</St.Text>
          </St.FuncSection>
        )}
      </St.Functionality>

      <St.OtherCollectionsContainer>
        <St.OtherCollectionsHeader>Other Collections</St.OtherCollectionsHeader>
        <St.OtherCollections>
          {getRelatedCollections(project).map((p) => (
            <CollectionCard key={p.projectSlug} project={p} />
          ))}
        </St.OtherCollections>
      </St.OtherCollectionsContainer>
    </St.DetailGrid>
  );
};

export default Details;
