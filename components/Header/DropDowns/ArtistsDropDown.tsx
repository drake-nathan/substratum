import { clsx } from "clsx";
import React from "react";
import { useTheme } from "styled-components";

import * as St from "./DropDowns.styled";
import { artistUrls, projects } from "data/projects";

const artists = projects.map(({ artist }) => artist);
const uniqueArtists = [...new Set(artists)];

interface Props {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  showDropDown: boolean;
}

const ArtistsDropDown = ({
  setShowDropDown,
  setShowMobileNav,
  showDropDown,
}: Props): JSX.Element => {
  const { isMobile } = useTheme();

  const closeBothMenus = () => {
    setShowDropDown(false);
    setShowMobileNav(false);
  };

  const renderItem = (name: string) => (
    <St.Project onClick={closeBothMenus}>{name}</St.Project>
  );

  const artistListJsx = uniqueArtists.map((artist) => {
    const url = artistUrls[artist];

    return (
      <St.RowLink href={url} key={artist} rel="noreferrer" target="_blank">
        <St.OpenInNewIcon />
        {renderItem(artist)}
      </St.RowLink>
    );
  });

  return !isMobile ? (
    <>
      {showDropDown && (
        <div
          className="fixed left-0 top-0 z-10 h-screen w-full"
          onClick={() => setShowDropDown(false)}
        />
      )}
      <div
        className={clsx(
          "absolute left-[153px] top-[31.5px] z-40 h-0 min-w-56 overflow-y-hidden bg-white transition-all duration-300 dark:bg-black",
          {
            "h-56 overflow-hidden px-5 pb-2 pt-3 outline outline-1 outline-black dark:outline-white":
              showDropDown,
            "overflow-auto px-2 py-0": !showDropDown,
          },
        )}
      >
        {artistListJsx}
      </div>
    </>
  ) : (
    <>
      {showDropDown && <div className="fixed left-0 top-0 z-10 flex-col" />}
      <div
        className={clsx(
          "left-50 top-[50.5px] z-40 h-0 min-w-56 overflow-y-hidden bg-white transition-all duration-300 dark:bg-black",
          {
            "h-max px-5 pb-2 pt-3 outline outline-1 outline-black dark:outline-white":
              showDropDown,
            "overflow-auto px-2 py-0": !showDropDown,
          },
        )}
      >
        {artistListJsx}
      </div>
    </>
  );
};

export default ArtistsDropDown;
