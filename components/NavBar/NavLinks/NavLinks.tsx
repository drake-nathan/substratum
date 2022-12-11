import React, { useState } from 'react';
import ProjectsDropDown from '../ProjectsDropDown/ProjectsDropDown';
import * as St from './NavLinks.styled';

interface Props {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<Props> = ({ setShowMobileNav }) => {
  const [showProjectsDropDown, setShowProjectsDropDown] = useState(false);

  return (
    <>
      <St.Container>
        <St.Tab onClick={() => setShowProjectsDropDown((prev) => !prev)}>
          <St.Text
            onClick={() => {
              setShowMobileNav(false);
            }}
          >
            PROJECTS
          </St.Text>
          <St.DropdownIcon />
        </St.Tab>
        <St.Tab>
          <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
            <St.Text onClick={() => setShowMobileNav(false)}>ABOUT</St.Text>
          </a>
        </St.Tab>
      </St.Container>
      {showProjectsDropDown && <ProjectsDropDown />}
    </>
  );
};

export default NavLinks;
