import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import type { IAttribute } from "services/azureApi/types";
import { useWindowSize } from "hooks/useWindowSize";
import * as St from "./TokenInfo.styled";
import { InfoTab } from "./types";
import Info from "./Info";

interface Props {
  projectSlug: string;
  traits: IAttribute[];
  description: string;
  poem: string | undefined;
  additionalDescription: string | undefined;
}

const TokenInfo: React.FC<Props> = ({
  projectSlug,
  traits,
  description,
  poem,
  additionalDescription,
}) => {
  const { windowWidth } = useWindowSize();

  const [maxTraitLength, setMaxTraitLength] = useState<number>(22);
  const [tab, setTab] = useState<InfoTab>("description");

  useEffect(() => {
    if (windowWidth > 450) setMaxTraitLength(22);
    else if (windowWidth <= 450 && windowWidth > 400) setMaxTraitLength(20);
    else setMaxTraitLength(18);
  }, [windowWidth]);

  const shortenTrait = (trait: string) => {
    if (trait.length > maxTraitLength) {
      return `${trait.slice(0, maxTraitLength)}...`;
    }
    return trait;
  };

  return (
    <St.Container>
      <St.TabWrapper>
        <St.Tab
          onClick={() => setTab("description")}
          $active={tab === "description"}
        >
          <h3>{projectSlug === "haiku" ? "Poem" : "Description"}</h3>
        </St.Tab>

        {additionalDescription && (
          <St.Tab
            onClick={() => setTab("more-info")}
            $active={tab === "more-info"}
          >
            <h3>More Info</h3>
          </St.Tab>
        )}

        <St.Tab onClick={() => setTab("traits")} $active={tab === "traits"}>
          <h3>Traits</h3>
        </St.Tab>
      </St.TabWrapper>

      <Info
        additionalDescription={additionalDescription}
        description={description}
        poem={poem}
        projectSlug={projectSlug}
        tab={tab}
        traits={traits}
      />
    </St.Container>
  );
};

export default TokenInfo;
