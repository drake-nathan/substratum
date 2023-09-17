import { artistUrls, projects } from "components/staticData/projects";
import React from "react";
import { useTheme } from "styled-components";

import * as St from "./DropDowns.styled";

const artists = projects.map(({ artist }) => artist);
const uniqueArtists = [...new Set(artists)];

interface Props {
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArtistsDropDown = ({
  showDropDown,
  setShowDropDown,
  setShowMobileNav,
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
      <St.RowLink key={artist} href={url} target="_blank" rel="noreferrer">
        <St.OpenInNewIcon />
        {renderItem(artist)}
      </St.RowLink>
    );
  });

  return !isMobile ? (
    <>
      {showDropDown && <St.Overlay onClick={closeBothMenus} />}
      <St.ContainerArtists $showDropDown={showDropDown}>
        {artistListJsx}
      </St.ContainerArtists>
    </>
  ) : (
    <St.MobileContainer>{artistListJsx}</St.MobileContainer>
  );
};

export default ArtistsDropDown;
