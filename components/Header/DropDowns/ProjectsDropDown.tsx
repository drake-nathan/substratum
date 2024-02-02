import { clsx } from "clsx";
import Link from "next/link";
import React from "react";
import { useTheme } from "styled-components";

import type { SetState } from "utils/types";

import * as St from "./DropDowns.styled";
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
}: Props): JSX.Element => {
  const { isMobile } = useTheme();

  const closeBothMenus = () => {
    setShowDropDown(false);
    setShowMobileNav(false);
  };

  const renderProjectItem = (name: string) => (
    <St.Project onClick={closeBothMenus}>{name}</St.Project>
  );

  const projectsListJsx = projects.map(
    ({ externalUrl, local, name, projectSlug }) =>
      local ? (
        <Link href={`/project/${projectSlug}`} key={name}>
          {renderProjectItem(name)}
        </Link>
      ) : (
        <St.RowLink
          href={externalUrl}
          key={name}
          rel="noreferrer"
          target="_blank"
        >
          <St.OpenInNewIcon />
          {renderProjectItem(name)}
        </St.RowLink>
      ),
  );

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
          "absolute left-0 top-[31.5px] z-40 h-0 min-w-56 overflow-y-hidden bg-white transition-all duration-300 dark:bg-black",
          showDropDown
            ? "h-56 overflow-hidden px-5 pb-2 pt-3 outline outline-1 outline-black dark:outline-white"
            : "overflow-auto px-2 py-0",
        )}
      >
        {projectsListJsx}
      </div>
    </>
  ) : (
    <St.MobileContainer>{projectsListJsx}</St.MobileContainer>
  );
};

export default ProjectsDropDown;
