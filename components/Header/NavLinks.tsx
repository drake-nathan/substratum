import { clsx } from "clsx";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { useTheme } from "styled-components";

import ArtistsDropDown from "./DropDowns/ArtistsDropDown";
import ProjectsDropDown from "./DropDowns/ProjectsDropDown";

interface Props {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ setShowMobileNav }: Props): React.JSX.Element => {
  const { isMobile } = useTheme();

  const [showProjectsDropDown, setShowProjectsDropDown] = useState(false);
  const [showArtistsDropDown, setShowArtistsDropDown] = useState(false);

  const projectsTab = (
    <>
      <button
        className="flex cursor-pointer items-center hover:underline"
        onClick={() => {
          setShowProjectsDropDown((prev) => !prev);
        }}
      >
        <h6 className="uppercase max-md:text-2xl">Projects</h6>

        <RxCaretDown
          className={clsx(
            "text-3xl transition-transform duration-300",
            showProjectsDropDown && "rotate-180",
          )}
        />
      </button>

      <ProjectsDropDown
        setShowDropDown={setShowProjectsDropDown}
        setShowMobileNav={setShowMobileNav}
        showDropDown={showProjectsDropDown}
      />
    </>
  );

  const artistsTab = (
    <>
      <button
        className="flex cursor-pointer items-center hover:underline"
        onClick={() => {
          setShowArtistsDropDown((prev) => !prev);
        }}
      >
        <h6 className="uppercase max-md:text-2xl">Artists</h6>

        <RxCaretDown
          className={clsx(
            "text-3xl transition-transform duration-300",
            showArtistsDropDown && "rotate-180",
          )}
        />
      </button>

      <ArtistsDropDown
        setShowDropDown={setShowArtistsDropDown}
        setShowMobileNav={setShowMobileNav}
        showDropDown={showArtistsDropDown}
      />
    </>
  );

  return (
    <div className="relative flex items-center gap-4 max-md:mb-4 max-md:h-full max-md:flex-col max-md:justify-start">
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

      <button className="flex cursor-pointer items-center hover:underline">
        <a
          href="https://market.substratum.art/"
          rel="noreferrer"
          target="_blank"
        >
          <h6
            className="uppercase max-md:text-2xl"
            onClick={() => setShowMobileNav(false)}
          >
            Market
          </h6>
        </a>
      </button>
    </div>
  );
};

export default NavLinks;
