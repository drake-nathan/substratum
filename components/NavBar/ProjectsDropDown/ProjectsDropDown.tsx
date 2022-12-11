import React from 'react';
import * as St from './ProjectsDropDown.styled';

interface Props {
  showDropDown: boolean;
}

const ProjectsDropDown: React.FC<Props> = ({ showDropDown }) => {
  return (
    <St.Container showDropDown={showDropDown}>
      <St.Project>BLONKS</St.Project>
      <St.Project>ENSŌ</St.Project>
      <St.Project>CHAINLIFE</St.Project>
      <St.Project>FOCUS</St.Project>
      <St.Project>TEXTURES</St.Project>
      <St.Project>deFOCUSED</St.Project>
    </St.Container>
  );
};

export default ProjectsDropDown;
