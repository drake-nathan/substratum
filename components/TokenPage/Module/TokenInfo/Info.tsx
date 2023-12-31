import { useWindowSize } from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import type { IAttribute } from "services/azureApi/types";

import * as St from "./TokenInfo.styled";
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
      <St.Description>
        {projectSlug === "haiku" && poem ? formatNewLines(poem) : description}
      </St.Description>
    ),
    "more-info": <St.Description>{additionalDescription}</St.Description>,
    traits: (
      <St.Table>
        {traits.map((trait) => {
          const { trait_type: name, value } = trait;
          const processedValue =
            typeof value === "string"
              ? shortenTrait(value, maxTraitLength)
              : value;
          const isTraitShortened =
            typeof value === "string" && value.length > maxTraitLength;
          const isLink = typeof value === "string" && value.includes("http");

          return (
            <St.Row key={name}>
              <St.Name>{name}</St.Name>
              {isLink ? (
                <a href={value} id={name} rel="noreferrer" target="_blank">
                  <St.Value>{processedValue}</St.Value>
                </a>
              ) : (
                <St.Value id={name}>{processedValue}</St.Value>
              )}
              {isTraitShortened && (
                <Tooltip
                  anchorId={name}
                  content={value.toString()}
                  positionStrategy="fixed"
                />
              )}
            </St.Row>
          );
        })}
      </St.Table>
    ),
  };

  return infoSection[tab];
};

export default Info;
