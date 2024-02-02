import type { Project } from "data/projects";

import DepositHead from "./Deposit/DepositHead";
import MarketIcons from "components/MarketIcons/MarketIcons";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  project: Project;
  tab: "details" | "mint" | "tokens";
}

const ProjectHead = ({ project, tab }: Props) => {
  const { artist, maxSupply, name, projectSlug, website } = project;

  const currentSupply = useCurrentSupply(projectSlug);
  const maxSupplyText = maxSupply > 999_999 ? "?" : intlNumberFormat(maxSupply);

  return (
    <div className="grid w-full px-10 sm:grid-cols-1 sm:py-20 md:grid-cols-2 md:p-20">
      <div className="flex w-full flex-col items-start max-sm:mt-10">
        <h1 className="mb-4 text-2xl sm:text-4xl">{name}</h1>

        <div className="mb-8 flex justify-start gap-2">
          <h3 className="font-sans text-xl capitalize italic sm:text-[2rem]">
            By
          </h3>{" "}
          <a href={website} rel="noreferrer" target="_blank">
            <h3 className="font-sans text-xl font-semibold capitalize italic hover:text-hover-light dark:hover:text-hover-dark sm:text-[2rem]">
              {artist}
            </h3>
          </a>
        </div>

        <div className="ml-1">
          <MarketIcons project={project} />
        </div>

        <div className="mt-1 font-sans text-lg italic sm:text-[26px]">
          {currentSupply}/{maxSupplyText} Tokens Minted
        </div>
      </div>

      {tab === "mint" && <DepositHead />}
    </div>
  );
};

export default ProjectHead;
