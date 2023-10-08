import * as St from "./TokenInfo.styled";
import type { IAttribute } from "services/azureApi/types";
import type { InfoTab } from "./types";
import Info from "./Info";
import { useQueryParam } from "hooks/useQueryParam";
import { z } from "zod";

interface Props {
  projectSlug: string;
  traits: IAttribute[];
  description: string;
  poem: string | undefined;
  additionalDescription: string | undefined;
}

const TokenInfo = ({
  projectSlug,
  traits,
  description,
  poem,
  additionalDescription,
}: Props): JSX.Element => {
  const [tabQuery, setTab] = useQueryParam("tab", "description");

  const infoTabSchema = z.enum(["description", "more-info", "traits"]);

  const tab = (infoTabSchema.parse(tabQuery) as InfoTab) ?? "description";

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
