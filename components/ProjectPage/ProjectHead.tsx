import React from 'react';
import { type Project } from 'components/LandingPage/Projects/projects';
import ProjectMarkets from 'components/MarketIcons/ProjectMarkets';
import * as St from './ProjectHead.styled';

interface Props {
  project: Project;
}

const ProjectHead: React.FC<Props> = ({ project }) => {
  const { name, artist, website, image, description, interactivity, royalties } = project;

  return (
    <St.Container>
      <St.TitleContainer>
        <St.Title>{name}</St.Title>

        <St.BottomRow>
          <St.ArtistDiv>
            <St.By>By</St.By>

            <a href={website} target="_blank" rel="noreferrer">
              <St.ArtistName>{artist}</St.ArtistName>
            </a>
          </St.ArtistDiv>

          <ProjectMarkets project={project} />
        </St.BottomRow>
      </St.TitleContainer>

      <St.DescContainer>
        <St.Image src={image} alt={'Project image'} />

        <St.DescSection>
          <St.DescTitle>Description</St.DescTitle>

          <St.Text>{description}</St.Text>
        </St.DescSection>

        {interactivity && (
          <St.DescSection>
            <St.DescTitle>Interactivity</St.DescTitle>

            <St.Text>{interactivity}</St.Text>
          </St.DescSection>
        )}

        {royalties && (
          <St.DescSection>
            <St.DescTitle>Royalties</St.DescTitle>

            <St.Text>{royalties}</St.Text>
          </St.DescSection>
        )}
      </St.DescContainer>
    </St.Container>
  );
};

export default ProjectHead;
