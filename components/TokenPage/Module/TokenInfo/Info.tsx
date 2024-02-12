import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import type { InfoTab } from "./types";
import type { IAttribute } from "services/azureApi/types";

import { formatNewLines, shortenTrait } from "./utils";
import { useWindowSize } from "hooks/useWindowSize";
import { isString } from "utils/helpers";

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
}: Props): JSX.Element => {
  const { windowWidth } = useWindowSize();

  const [maxTraitLength, setMaxTraitLength] = useState<number>(22);

  useEffect(() => {
    if (windowWidth > 450) setMaxTraitLength(22);
    else if (windowWidth <= 450 && windowWidth > 400) setMaxTraitLength(20);
    else setMaxTraitLength(18);
  }, [windowWidth]);

  const infoSection: Record<InfoTab, JSX.Element> = {
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

              {isTraitShortened && (
                <Tooltip
                  anchorId={name}
                  content={value.toString()}
                  positionStrategy="fixed"
                />
              )}
            </div>
          );
        })}
      </div>
    ),
  };

  return infoSection[tab];
};

export default Info;
