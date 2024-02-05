import { useState } from "react";
import { useTheme } from "styled-components";

import ArtistsDropDown from "../DropDowns/ArtistsDropDown";
import ProjectsDropDown from "../DropDowns/ProjectsDropDown";
import * as St from "./NavLinks.styled";

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
          //setShowArtistsDropDown(false);
          setShowProjectsDropDown((prev) => !prev);
        }}
      >
        <St.Text
        // onClick={() => {
        // setShowMobileNav(false);
        //}}
        >
          Projects
        </St.Text>
        <St.DropdownIcon
          className={showProjectsDropDown ? "dropdown-flip" : ""}
        />
      </St.Tab>

      <ProjectsDropDown
        setShowDropDown={setShowProjectsDropDown}
        setShowMobileNav={setShowMobileNav}
        showDropDown={showProjectsDropDown}
      />
    </>
  );

  const artistsTab = (
    <>
      <St.Tab
        onClick={
          !isMobile ?
            () => {
              //setShowProjectsDropDown(false);
              setShowArtistsDropDown((prev) => !prev);
            }
          : () => {
              setShowArtistsDropDown((prev) => !prev);
            }
        }
      >
        <St.Text
        //onClick={() => {
        //setShowMobileNav(false);
        //}}
        >
          Artists
        </St.Text>

        <St.DropdownIcon
          className={showArtistsDropDown ? "dropdown-flip" : ""}
        />
      </St.Tab>

      <ArtistsDropDown
        setShowDropDown={setShowArtistsDropDown}
        setShowMobileNav={setShowMobileNav}
        showDropDown={showArtistsDropDown}
      />
    </>
  );

  return (
    <div className="relative flex items-center gap-4 max-md:mb-4 max-md:h-full max-md:flex-col max-md:justify-between">
      {!isMobile ?
        projectsTab
      : <div className="relative flex w-full flex-col items-center gap-4">
          {projectsTab}
        </div>
      }

      {!isMobile ?
        artistsTab
      : <div className="relative flex w-full flex-col items-center gap-4">
          {artistsTab}
        </div>
      }

      <St.Tab>
        <a
          href="https://market.substratum.art/"
          rel="noreferrer"
          target="_blank"
        >
          <span
            className="text-3xl font-normal uppercase md:text-lg"
            onClick={() => setShowMobileNav(false)}
          >
            Market
          </span>
        </a>
      </St.Tab>
    </div>
  );
};

export default NavLinks;
