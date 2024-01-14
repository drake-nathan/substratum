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
          onClick={closeBothMenus}
        />
      )}
      <St.ContainerArtists $showDropDown={showDropDown}>
        {artistListJsx}
      </St.ContainerArtists>
    </>
  ) : (
    <St.MobileContainer>{artistListJsx}</St.MobileContainer>
  );
};

export default ArtistsDropDown;
