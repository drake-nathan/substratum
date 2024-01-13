/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import type { Project } from "data/projects";

import { useCurrentSupply } from "hooks/useCurrentSupply";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  project: Project;
}

const Card = ({ project }: Props): JSX.Element => {
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

  const CardJsx = (
    <div className="relative flex w-[400px] flex-col rounded-xs border border-black hover:cursor-pointer dark:border-white">
      <div className="size-full overflow-hidden">
        <img
          alt={name}
          className="aspect-square size-full object-cover"
          src={image}
        />

        <div className="absolute right-0 top-0 flex h-[31px] w-[104px] items-center justify-center rounded-xs bg-black">
          <p className="font-transducer text-[15px] text-white">{status}</p>
        </div>
      </div>

      <div className="flex w-full flex-col p-4">
        <h4 className="w-full">{name}</h4>
        <p className="text-lg font-light italic">{`By ${artist}`}</p>

        <p className="mt-4 text-lg">
          {currentSupply ? intlNumberFormat(currentSupply) : 0}/{maxSupplyText}{" "}
          Minted
        </p>
      </div>
    </div>
  );

  // render a link if the project is local, otherwise render an anchor tag
  return local ? (
    <Link href={`/project/${projectSlug}`}>{CardJsx}</Link>
  ) : (
    <a href={externalUrl} rel="noreferrer" target="_blank">
      {CardJsx}
    </a>
  );
};

export default Card;
