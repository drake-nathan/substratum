import { useState } from 'react';
import { useTheme } from 'styled-components';
import ProjectsDropDown from '../DropDowns/ProjectsDropDown';
import ArtistsDropDown from '../DropDowns/ArtistsDropDown';
import * as St from './NavLinks.styled';

interface Props {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ setShowMobileNav }: Props): JSX.Element => {
  const { isMobile } = useTheme();

  const [showProjectsDropDown, setShowProjectsDropDown] = useState(false);
  const [showArtistsDropDown, setShowArtistsDropDown] = useState(false);

  const projectsTab = (
    <>
      <St.Tab
        onClick={() => {
          setShowArtistsDropDown(false);
          setShowProjectsDropDown((prev) => !prev);
        }}
      >
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

  const artistsTab = (
    <>
      <St.Tab
        onClick={() => {
          setShowProjectsDropDown(false);
          setShowArtistsDropDown((prev) => !prev);
        }}
      >
        <St.Text
          onClick={() => {
            setShowMobileNav(false);
          }}
        >
          Artists
        </St.Text>
        {!isMobile && (
          <St.DropdownIcon
            className={showArtistsDropDown ? 'dropdown-flip' : ''}
          />
        )}
      </St.Tab>

      {isMobile && (
        <ArtistsDropDown
          showDropDown={showArtistsDropDown}
          setShowDropDown={setShowArtistsDropDown}
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
        <St.DropDownMobileDiv>{projectsTab}</St.DropDownMobileDiv>
      )}

      {!isMobile ? (
        artistsTab
      ) : (
        <St.DropDownMobileDiv>{artistsTab}</St.DropDownMobileDiv>
      )}

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

      {!isMobile && (
        <ArtistsDropDown
          showDropDown={showArtistsDropDown}
          setShowDropDown={setShowArtistsDropDown}
          setShowMobileNav={setShowMobileNav}
        />
      )}
    </St.Container>
  );
};

export default NavLinks;
