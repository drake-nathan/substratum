import type { IAttribute } from "services/azureApi/types";

import { parseAsStringEnum, useQueryState } from "next-usequerystate";

import type { InfoTab } from "./types";

import Info from "./Info";
import * as St from "./TokenInfo.styled";

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
    <St.Container>
      <St.TabWrapper>
        <St.Tab
          $active={tab === "description"}
          onClick={() => setTab("description")}
        >
          <h3>{projectSlug === "haiku" ? "Poem" : "Description"}</h3>
        </St.Tab>

        {additionalDescription && (
          <St.Tab
            $active={tab === "more-info"}
            onClick={() => setTab("more-info")}
          >
            <h3>{projectSlug === "haiku" ? "AI Analysis" : "More Info"}</h3>
          </St.Tab>
        )}

        <St.Tab $active={tab === "traits"} onClick={() => setTab("traits")}>
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
