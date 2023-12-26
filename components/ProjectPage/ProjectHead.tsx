import MarketIcons from "components/MarketIcons/MarketIcons";
import { type Project } from "components/staticData/projects";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { intlNumberFormat } from "utils/helpers";

import * as St from "./ProjectHead.styled";

interface Props {
  project: Project;
}

const ProjectHead = ({ project }: Props) => {
  const { name, artist, website, maxSupply, projectSlug } = project;

  const currentSupply = useCurrentSupply(projectSlug);
  const maxSupplyText = maxSupply > 999_999 ? "?" : intlNumberFormat(maxSupply);

  return (
    <St.Container>
      <St.Title>{name}</St.Title>

      <St.ArtistDiv>
        <St.By>By</St.By>{" "}
        <a href={website} target="_blank" rel="noreferrer">
          <St.ArtistName>{artist}</St.ArtistName>
        </a>
      </St.ArtistDiv>

      <St.MarketIconsWrapper>
        <MarketIcons project={project} />
      </St.MarketIconsWrapper>

      <St.TokenStatus>
        {currentSupply}/{maxSupplyText} Tokens Minted
      </St.TokenStatus>
    </St.Container>
  );
};

export default ProjectHead;
