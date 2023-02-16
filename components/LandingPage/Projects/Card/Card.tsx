import { useState } from 'react';
import Link from 'next/link';
import { Project } from '../projects';
import * as St from './Card.styled';

interface Props {
  project: Project;
}

const Card = ({
  project: { name, image, local, externalUrl, projectSlug },
}: Props): JSX.Element => {
  const [showOverlay, setShowOverlay] = useState(false);

  const CardJsx = (
    <St.Container
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <St.Img src={image} alt={name} />
      <St.Overlay isShown={showOverlay} />
      <St.OverlayText isShown={showOverlay}>{name}</St.OverlayText>
    </St.Container>
  );

  const renderCardWithLink = () =>
    local ? (
      <Link href={`/project/${projectSlug}`}>{CardJsx}</Link>
    ) : (
      <a href={externalUrl} target="_blank" rel="noreferrer">
        {CardJsx}
      </a>
    );

  return renderCardWithLink();
};

export default Card;
