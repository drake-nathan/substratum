import React from 'react';
import { projects } from 'components/LandingPage/Projects/projects';
import * as St from './ProjectsDropDown.styled';

interface Props {
  showDropDown: boolean;
}

const ProjectsDropDown: React.FC<Props> = ({ showDropDown }) => {
  return (
    <St.Container showDropDown={showDropDown}>
      {projects.map(({ name }) => (
        <St.Project key={name}>{name}</St.Project>
      ))}
    </St.Container>
  );
};

export default ProjectsDropDown;
