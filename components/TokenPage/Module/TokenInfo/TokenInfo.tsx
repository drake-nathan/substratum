import { clsx } from "clsx";
import { parseAsStringEnum, useQueryState } from "next-usequerystate";

import type { InfoTab } from "./types";
import type { IAttribute } from "services/azureApi/types";

import Info from "./Info";

interface Props {
  additionalDescription: string | undefined;
  description: string;
  poem: string | undefined;
  projectSlug: string;
  traits: IAttribute[];
}

const TokenInfo = ({
  additionalDescription,
  description,
  poem,
  projectSlug,
  traits,
}: Props): JSX.Element => {
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringEnum<InfoTab>([
      "description",
      "more-info",
      "traits",
    ]).withDefault("description"),
  );

  return (
    <div className="flex flex-col gap-4 pb-16" id="token-info-container">
      <div className="mb-4 flex justify-between" id="token-info-tab-wrapper">
        <button
          className={clsx(
            tab === "description" &&
              "border-b-2 border-black dark:border-white",
          )}
          onClick={() => void setTab("description")}
        >
          <h3 className="max-md:text-lg">
            {projectSlug === "haiku" ? "Poem" : "Description"}
          </h3>
        </button>

        {additionalDescription && (
          <button
            className={clsx(
              tab === "more-info" &&
                "border-b-2 border-black dark:border-white",
            )}
            onClick={() => void setTab("more-info")}
          >
            <h3 className="max-md:text-lg">
              {projectSlug === "haiku" ? "AI Analysis" : "More Info"}
            </h3>
          </button>
        )}

        <button
          className={clsx(
            tab === "traits" && "border-b-2 border-black dark:border-white",
          )}
          onClick={() => void setTab("traits")}
        >
          <h3 className="max-md:text-lg">Traits</h3>
        </button>
      </div>

      <Info
        additionalDescription={additionalDescription}
        description={description}
        poem={poem}
        projectSlug={projectSlug}
        tab={tab}
        traits={traits}
      />
    </div>
  );
};

export default TokenInfo;
