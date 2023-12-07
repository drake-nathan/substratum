import { type Project } from "components/staticData/projects";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import Link from "next/link";
import { intlNumberFormat } from "utils/helpers";

import * as St from "./CollectionCard.styled";

interface Props {
  project: Project;
}

const Card = ({ project }: Props): JSX.Element => {
  const {
    name,
    artist,
    image,
    local,
    projectSlug,
    externalUrl,
    maxSupply,
    status,
  } = project;

  const currentSupply = useCurrentSupply(projectSlug);

  const maxSupplyText = maxSupply > 999_999 ? "?" : intlNumberFormat(maxSupply);

  const CardJsx = (
    <St.Container>
      <St.ImgSection>
        <St.Img src={image} alt={name} />

        <St.StatusDiv>
          <St.StatusText>{status}</St.StatusText>
        </St.StatusDiv>
      </St.ImgSection>

      <St.InfoSection>
        <St.ProjectTitle>{name}</St.ProjectTitle>
        <St.ArtistName>
          By
          {artist}
        </St.ArtistName>

        <St.SupplyText>
          {currentSupply ? intlNumberFormat(currentSupply) : 0}/{maxSupplyText}{" "}
          Minted
        </St.SupplyText>
      </St.InfoSection>
    </St.Container>
  );

  // render a link if the project is local, otherwise render an anchor tag
  return local ? (
    <Link href={`/project/${projectSlug}`}>{CardJsx}</Link>
  ) : (
    <a href={externalUrl} target="_blank" rel="noreferrer">
      {CardJsx}
    </a>
  );
};

export default Card;
