import React from 'react';
import Link from 'next/link';
import { projects } from 'components/LandingPage/Projects/projects';
import * as St from './ProjectsDropDown.styled';
import { useTheme } from 'styled-components';

interface Props {
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsDropDown: React.FC<Props> = ({ showDropDown, setShowDropDown }) => {
  const { isMobile } = useTheme();

  const renderProjectItem = (name: string) => (
    <St.ProjectLi onClick={() => setShowDropDown(false)}>{name}</St.ProjectLi>
  );

  const projectsListJsx = projects.map(({ name, local, externalUrl, projectSlug }) =>
    local ? (
      <Link key={name} href={`/project/${projectSlug}`}>
        {renderProjectItem(name)}
      </Link>
    ) : (
      <a key={name} href={externalUrl} target="_blank" rel="noreferrer">
        {renderProjectItem(name)}
      </a>
    ),
  );

  return !isMobile ? (
    <St.ContainerUl showDropDown={showDropDown}>{projectsListJsx}</St.ContainerUl>
  ) : (
    <St.MobileContainer>{projectsListJsx}</St.MobileContainer>
  );
};

export default ProjectsDropDown;
