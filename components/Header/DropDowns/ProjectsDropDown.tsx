import { projects } from "components/staticData/projects";
import Link from "next/link";
import React from "react";
import { useTheme } from "styled-components";

import * as St from "./DropDowns.styled";

interface Props {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
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
      {showDropDown && <St.Overlay onClick={() => setShowDropDown(false)} />}
      <St.Container $showDropDown={showDropDown}>
        {projectsListJsx}
      </St.Container>
    </>
  ) : (
    <St.MobileContainer>{projectsListJsx}</St.MobileContainer>
  );
};

export default ProjectsDropDown;
