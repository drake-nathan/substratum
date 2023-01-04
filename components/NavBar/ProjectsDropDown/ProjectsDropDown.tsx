import React from 'react';
import Link from 'next/link';
import { projects } from 'components/LandingPage/Projects/projects';
import * as St from './ProjectsDropDown.styled';

interface Props {
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsDropDown: React.FC<Props> = ({ showDropDown, setShowDropDown }) => {
  const renderProjectItem = (name: string) => (
    <St.Project onClick={() => setShowDropDown(false)}>{name}</St.Project>
  );

  return (
    <St.Container showDropDown={showDropDown}>
      {projects.map(({ name, local, externalUrl, projectSlug }) =>
        local ? (
          <Link key={name} href={`/project/${projectSlug}`}>
            {renderProjectItem(name)}
          </Link>
        ) : (
          <a key={name} href={externalUrl} target="_blank" rel="noreferrer">
            {renderProjectItem(name)}
          </a>
        ),
      )}
    </St.Container>
  );
};

export default ProjectsDropDown;
