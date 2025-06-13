import type { IAttribute } from "services/azureApi/types";

import { Tooltip } from "react-tooltip";
import { isString } from "utils/helpers";

import type { InfoTab } from "./types";

import { formatNewLines, shortenTrait } from "./utils";

interface Props {
  additionalDescription: string | undefined;
  description: string;
  poem: string | undefined;
  projectSlug: string;
  tab: InfoTab;
  traits: IAttribute[];
}

const Info = ({
  additionalDescription,
  description,
  poem,
  projectSlug,
  tab,
  traits,
}: Props): React.JSX.Element => {
  // TODO: re-check responsiveness here
  const maxTraitLength = 20;

  const infoSection: Record<InfoTab, React.JSX.Element> = {
    description: (
      <p className="mb-4 text-justify max-md:text-sm">
        {projectSlug === "haiku" && poem ? formatNewLines(poem) : description}
      </p>
    ),
    "more-info": (
      <p className="mb-4 text-justify max-md:text-sm">
        {additionalDescription}
      </p>
    ),
    traits: (
      <div className="flex w-full flex-col gap-2" id="info-table">
        {traits.map((trait) => {
          const { trait_type: name, value } = trait;
          const processedValue =
            isString(value) ? shortenTrait(value, maxTraitLength) : value;
          const isTraitShortened =
            isString(value) && value.length > maxTraitLength;
          const isLink = isString(value) && value.includes("http");

          return (
            <div
              className="relative grid grid-cols-2 overflow-hidden max-md:text-sm"
              key={name}
            >
              <span className="overflow-hidden text-lg font-semibold">
                {name}
              </span>

              {isLink ?
                <a
                  className="justify-self-end hover:underline"
                  href={value}
                  id={name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="justify-self-end overflow-hidden whitespace-nowrap text-lg">
                    {processedValue}
                  </span>
                </a>
              : <div
                  className="justify-self-end overflow-hidden whitespace-nowrap text-lg"
                  id={name}
                >
                  {processedValue}
                </div>
              }

              {isTraitShortened ?
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-deprecated
                  anchorId={name}
                  content={value.toString()}
                  positionStrategy="fixed"
                />
              : null}
            </div>
          );
        })}
      </div>
    ),
  };

  return infoSection[tab];
};

export default Info;
