import Link from "next/link";
import React from "react";

import type { Project } from "../../../data/projects";

import { useCurrentSupply } from "hooks/useCurrentSupply";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  project: Project;
}

const Card = ({ project }: Props): React.JSX.Element => {
  const {
    artist,
    externalUrl,
    image,
    local,
    maxSupply,
    name,
    projectSlug,
    status,
  } = project;

  const currentSupply = useCurrentSupply(projectSlug);

  const maxSupplyText = maxSupply > 999_999 ? "?" : intlNumberFormat(maxSupply);
  const supplyText = `${
    currentSupply ? intlNumberFormat(currentSupply) : 0
  }/${maxSupplyText} Minted`;

  const CardJsx = (
    <div
      className="relative flex cursor-pointer flex-col border border-black dark:border-white"
      id="project-card-container"
    >
      <div className="size-full overflow-hidden" id="project-card-img-section">
        <img
          alt={name}
          className="aspect-square size-full object-cover"
          src={image}
        />

        <div
          className="absolute right-0 top-0 flex items-center justify-center bg-black px-3 py-1"
          id="project-card-status-div"
        >
          <p
            className="font-transducer text-[15px] text-white"
            id="project-card-status-text"
          >
            {status}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col p-4" id="project-card-info-section">
        <h4 id="project-card-title">{name}</h4>

        <p className="text-lg font-light italic" id="project-card-artist-name">
          By {artist}
        </p>

        <p className="mt-4 text-lg" id="project-card-supply-text">
          {supplyText}
        </p>
      </div>
    </div>
  );

  // render a link if the project is local, otherwise render an anchor tag
  return local ?
      <Link href={`/project/${projectSlug}`}>{CardJsx}</Link>
    : <a href={externalUrl} rel="noreferrer" target="_blank">
        {CardJsx}
      </a>;
};

export default Card;
