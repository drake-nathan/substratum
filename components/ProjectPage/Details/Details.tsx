/* eslint-disable @next/next/no-img-element */
import { RxOpenInNewWindow } from "react-icons/rx";

import Legend from "../100x/Legend/Legend";
import Shuffler from "../100x/Shuffler/Shuffler";
import CollectionCard from "./OtherCollections/CollectionCard";
import { type Project, projects } from "data/projects";

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
    aspectRatio,
    image,
    name,
    projectPageInfo: {
      collectionDetails,
      date,
      description,
      interactivity,
      license,
      notes,
      royalties,
      tools,
    },
    projectSlug,
  } = project;

  return (
    <div className="mt-12 grid w-full grid-cols-2 gap-8 px-20 max-sm:mt-[23px] max-sm:py-[23px]">
      <div className="mt-4 flex min-w-[400px] flex-col max-md:col-span-2 max-md:col-start-1 max-md:m-0 max-md:min-w-[auto]">
        <img
          alt="Project image"
          className="w-full border border-black object-cover dark:border-white"
          src={image}
          style={{ aspectRatio }}
        />
        <div className="flex w-full justify-between border border-t-0 border-black p-4 dark:border-white">
          <span className="flex-1 text-left font-sans text-xl italic md:text-[28px]">
            {name}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 max-md:col-span-2 max-md:col-start-1">
        {(projectSlug === "100x10x1-a" ||
          projectSlug === "100x10x1-a-goerli") && <Shuffler />}

        <div className="w-full min-w-[225px] max-xl:min-w-[350px] max-[400px]:min-w-[325px]">
          <h2>About {name}</h2>
          <p className="max-w-prose whitespace-pre-line">{description}</p>
          {projectSlug === "texture-and-hues" && (
            <a
              href="https://mattoapi.blob.core.windows.net/texture-and-hues-images/allSVGs.json"
              rel="noreferrer"
              target="_blank"
            >
              <div className="g-1 mt-4 flex items-center text-lg hover:text-black dark:hover:text-white">
                <span className="underline">All SVGs</span>
                <RxOpenInNewWindow className="font-medium" />
              </div>
            </a>
          )}
        </div>

        <div className="flex flex-col">
          <h2>Collection Details</h2>
          <p className="max-w-prose whitespace-pre-line">{collectionDetails}</p>
          <p className="max-w-prose whitespace-pre-line">{date}</p>

          <h4 className="mb-1 mt-4 font-sans font-bold capitalize">Tools</h4>
          <p className="max-w-prose whitespace-pre-line">{tools}</p>

          {notes && (
            <>
              <h4 className="mb-1 mt-4 font-sans font-bold capitalize">
                Notes
              </h4>
              <p className="max-w-prose whitespace-pre-line">{notes}</p>
            </>
          )}

          {interactivity && (
            <>
              <h4 className="mb-1 mt-4 font-sans font-bold capitalize">
                Interactivity
              </h4>
              <p className="max-w-prose whitespace-pre-line">{interactivity}</p>
            </>
          )}

          {royalties && (
            <>
              <h4 className="mb-1 mt-4 font-sans font-bold capitalize">
                Royalties
              </h4>
              <p className="max-w-prose whitespace-pre-line">{royalties}</p>
            </>
          )}

          <h4 className="mb-1 mt-4 font-sans font-bold capitalize">License</h4>
          <p className="max-w-prose whitespace-pre-line">{license}</p>
        </div>
      </div>

      {projectSlug === "100x10x1-a" ||
        (projectSlug === "100x10x1-a-goerli" && <Legend />)}

      <div className="col-span-2 col-start-1">
        <h2 className="mb-2">Other Collections</h2>
        <div className="g-8 flex w-full">
          {getRelatedCollections(project).map((p) => (
            <CollectionCard key={p.projectSlug} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
