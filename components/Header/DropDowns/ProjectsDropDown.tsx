import { clsx } from "clsx";
import Link from "next/link";
import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";

import type { SetState } from "utils/types";

import { useTheme } from "contexts/ThemeProvider";
import { projects } from "data/projects";

interface Props {
  setShowDropDown: SetState<boolean>;
  setShowMobileNav: SetState<boolean>;
  showDropDown: boolean;
}

const ProjectsDropDown = ({
  setShowDropDown,
  setShowMobileNav,
  showDropDown,
}: Props): React.JSX.Element => {
  const { isMobile } = useTheme();

  const closeBothMenus = () => {
    setShowDropDown(false);
    setShowMobileNav(false);
  };

  const renderProjectItem = (name: string) => (
    <div
      className="font-semibold tracking-normal hover:cursor-pointer hover:font-bold max-md:my-2 max-md:text-xl"
      onClick={closeBothMenus}
    >
      {name}
    </div>
  );

  const projectsListJsx = projects.map(
    ({ externalUrl, local, name, projectSlug }) =>
      local ?
        <Link href={`/project/${projectSlug}`} key={name}>
          {renderProjectItem(name)}
        </Link>
      : <a
          className="flex items-center gap-1 max-md:-mt-1"
          href={externalUrl}
          key={name}
          rel="noreferrer"
          target="_blank"
        >
          <RxOpenInNewWindow className="font-medium" />
          {renderProjectItem(name)}
        </a>,
  );

  return !isMobile ?
      <>
        {showDropDown && (
          <div
            className="fixed left-0 top-0 z-10 h-screen w-full"
            onClick={() => setShowDropDown(false)}
          />
        )}
        <div
          className={clsx(
            "absolute left-0 top-[31.5px] z-40 h-0 min-w-56 overflow-y-hidden bg-white transition-all duration-300 dark:bg-black",
            {
              "h-56 overflow-hidden px-5 pb-2 pt-3 outline outline-1 outline-black dark:outline-white":
                showDropDown,
              "overflow-auto px-2 py-0": !showDropDown,
            },
          )}
        >
          {projectsListJsx}
        </div>
      </>
    : <>
        {showDropDown && <div className="fixed left-0 top-0 z-10 flex-col" />}
        <div
          className={clsx(
            "top-[50.5px] z-40 h-0 min-w-56 overflow-y-hidden bg-white transition-all duration-300 dark:bg-black",
            {
              "h-max px-5 py-5 outline outline-1 outline-black dark:outline-white":
                showDropDown,
              "overflow-auto px-2 py-0": !showDropDown,
            },
          )}
        >
          {projectsListJsx}
        </div>
      </>;
};

export default ProjectsDropDown;
