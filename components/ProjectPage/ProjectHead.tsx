import React from 'react';
import { Project } from 'components/LandingPage/Projects/projects';
import * as St from './ProjectHead.styled';

interface Props {
  project: Project;
}

const ProjectHead: React.FC<Props> = ({ project }) => {
  const { name, image, description, interactivity, royalties } = project;

  return (
    <St.Container>
      <St.TitleContainer>
        <St.Title>{name}</St.Title>
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
