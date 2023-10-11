import * as St from "components/ProjectPage/Details/Details.styled";
import { Project, projects } from "components/staticData/projects";
import { drawOrder as dO } from "components/staticData/100x10x1A/order";
import { useState } from "react";
import CollectionCard from "./OtherCollections/CollectionCard";
import LayeredCollection from "../LayeredCollection/LayeredCollection";
import Legend from "../LayeredCollection/Legend/Legend";
import Shuffler from "../LayeredCollection/Shuffler/Shuffler";

interface Props {
  project: Project;
}

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
    image,
    projectPageInfo: {
      license,
      description,
      interactivity,
      royalties,
      collectionDetails,
      date,
      tools,
      notes,
    },
  } = project;

  const [drawOrder, setDrawOrder] = useState(dO);
  const [viewTokenID, setViewTokenID] = useState(0);

  return (
    <St.DetailGrid>
      <St.ProjectImage>
        {projectSlug === "100x10x1-a" ? (
          <LayeredCollection
            viewTokenID={viewTokenID}
            setViewTokenID={setViewTokenID}
            drawOrder={drawOrder}
          />
        ) : (
          <>
            <St.Image src={image} alt="Project image" />
            <St.ProjectImageNameContainer>
              <St.ProjectImageName>{name}</St.ProjectImageName>
            </St.ProjectImageNameContainer>
          </>
        )}
      </St.ProjectImage>

      <St.Details>
        {/** FIXME - render shuffler if the project is of a certain class */}
        {projectSlug === "100x10x1-a" && (
          <Shuffler
            setDrawOrder={setDrawOrder}
            drawOrder={drawOrder}
            setViewTokenID={setViewTokenID}
          />
        )}
        <St.AboutSection>
          <St.DescTitle>About {name}</St.DescTitle>
          <St.Text>{description}</St.Text>
          {projectSlug === "texture-and-hues" && (
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
          <St.Text>{collectionDetails}</St.Text>
          <St.Text>{date}</St.Text>

          <St.SmallDescTitle>Tools</St.SmallDescTitle>
          <St.Text>{tools}</St.Text>

          {notes && (
            <>
              <St.SmallDescTitle>Notes</St.SmallDescTitle>
              <St.Text>{notes}</St.Text>
            </>
          )}

          {interactivity && (
            <>
              <St.SmallDescTitle>Interactivity</St.SmallDescTitle>
              <St.Text>{interactivity}</St.Text>
            </>
          )}

          {royalties && (
            <>
              <St.SmallDescTitle>Royalties</St.SmallDescTitle>
              <St.Text>{royalties}</St.Text>
            </>
          )}

          <St.SmallDescTitle>License</St.SmallDescTitle>
          <St.Text>{license}</St.Text>
        </St.OtherInfo>
      </St.Details>

      {projectSlug === "100x10x1-a" && <Legend />}

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
