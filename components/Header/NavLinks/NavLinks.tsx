import { useState } from 'react';
import { useTheme } from 'styled-components';
import ProjectsDropDown from '../DropDowns/ProjectsDropDown';
import * as St from './NavLinks.styled';

interface Props {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ setShowMobileNav }: Props): JSX.Element => {
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
          Projects
        </St.Text>
        {!isMobile && (
          <St.DropdownIcon
            className={showProjectsDropDown ? 'dropdown-flip' : ''}
          />
        )}
      </St.Tab>

      {isMobile && (
        <ProjectsDropDown
          showDropDown={showProjectsDropDown}
          setShowDropDown={setShowProjectsDropDown}
          setShowMobileNav={setShowMobileNav}
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
        <a href="https://matto.xyz/" rel="noreferrer" target="_blank">
          <St.Text onClick={() => setShowMobileNav(false)}>Artists</St.Text>
        </a>
      </St.Tab>

      {/* <St.Tab>
        <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
          <St.Text onClick={() => setShowMobileNav(false)}>About</St.Text>
        </a>
      </St.Tab>

      <St.Tab>
        <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
          <St.Text onClick={() => setShowMobileNav(false)}>Docs</St.Text>
        </a>
      </St.Tab> */}

      {!isMobile && (
        <ProjectsDropDown
          showDropDown={showProjectsDropDown}
          setShowDropDown={setShowProjectsDropDown}
          setShowMobileNav={setShowMobileNav}
        />
      )}
    </St.Container>
  );
};

export default NavLinks;
