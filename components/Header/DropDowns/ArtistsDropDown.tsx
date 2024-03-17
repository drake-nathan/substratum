import { clsx } from "clsx";
import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";

import type { SetState } from "utils/types";

import { artistUrls, projects } from "data/projects";

const artists = projects.map(({ artist }) => artist);
const uniqueArtists = [...new Set(artists)];

interface Props {
  setShowDropDown: SetState<boolean>;
  setShowMobileNav: SetState<boolean>;
  showDropDown: boolean;
}

const ArtistsDropDown = ({
  setShowDropDown,
  setShowMobileNav,
  showDropDown,
}: Props): JSX.Element => {
  const closeBothMenus = () => {
    setShowDropDown(false);
    setShowMobileNav(false);
  };

  const renderItem = (name: string) => (
    <div
      className="font-semibold tracking-normal hover:cursor-pointer hover:font-bold max-md:my-2 max-md:text-xl"
      onClick={closeBothMenus}
    >
      {name}
    </div>
  );

  const artistListJsx = uniqueArtists.map((artist) => {
    const url = artistUrls[artist];

    return (
      <a
        className="flex items-center gap-1 max-md:-mt-1"
        href={url}
        key={artist}
        rel="noreferrer"
        target="_blank"
      >
        <RxOpenInNewWindow className="font-medium" />
        {renderItem(artist)}
      </a>
    );
  });

  return (
    <>
      {showDropDown && (
        <div
          className="fixed left-0 top-0 z-10 h-screen w-full"
          onClick={() => setShowDropDown(false)}
        />
      )}
      <div
        className={clsx(
          "absolute top-[31.5px] z-40 h-0 min-w-56 overflow-y-hidden bg-white transition-all duration-300 dark:bg-black",
          "md:left-[153px] md:top-[31.5px]",
          {
            "h-24 overflow-hidden px-5 pb-2 pt-3 outline outline-1 outline-black dark:outline-white":
              showDropDown,
            "md:h-max md:px-5 md:pb-2 md:pt-3": showDropDown,
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
