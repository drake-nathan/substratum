import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import ProjectsDropDown from '../ProjectsDropDown/ProjectsDropDown';
import * as St from './NavLinks.styled';

interface Props {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<Props> = ({ setShowMobileNav }) => {
  const { isMobile } = useTheme();
  const [showProjectsDropDown, setShowProjectsDropDown] = useState(false);

  const projectsTab = (
    <>
      <St.Tab onClick={() => setShowProjectsDropDown((prev) => !prev)}>
        <St.Text
          onClick={() => {
            setShowMobileNav(false);
          }}
        >
          PROJECTS
        </St.Text>
        {!isMobile && (
          <St.DropdownIcon className={showProjectsDropDown ? 'dropdown-flip' : ''} />
        )}
      </St.Tab>
      {isMobile && (
        <ProjectsDropDown
          showDropDown={showProjectsDropDown}
          setShowDropDown={setShowProjectsDropDown}
        />
      )}
    </>
  );

  return (
    <St.Container>
      {!isMobile ? (
        projectsTab
      ) : (
        <St.ProjectsMobileDiv>{projectsTab}</St.ProjectsMobileDiv>
      )}

      <St.Tab>
        <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
          <St.Text onClick={() => setShowMobileNav(false)}>ABOUT</St.Text>
        </a>
      </St.Tab>

      {!isMobile && (
        <ProjectsDropDown
          showDropDown={showProjectsDropDown}
          setShowDropDown={setShowProjectsDropDown}
        />
      )}
    </St.Container>
  );
};

export default NavLinks;
