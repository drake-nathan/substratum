import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../projects';
import * as St from './Card.styled';

interface Props {
  project: Project;
}

const Card: React.FC<Props> = ({ project: { name, image, local, url } }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const CardJsx = (
    <St.Container
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
      <St.Overlay isShown={showOverlay} />
      <St.OverlayText isShown={showOverlay}>{name}</St.OverlayText>
    </St.Container>
  );

  const renderCardWithLink = () =>
    local ? (
      <Link href={url}>{CardJsx}</Link>
    ) : (
      <a href={url} target="_blank" rel="noreferrer">
        {CardJsx}
      </a>
    );

  return renderCardWithLink();
};

export default Card;
