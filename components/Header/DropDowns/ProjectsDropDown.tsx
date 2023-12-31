import { projects } from "components/staticData/projects";
import Link from "next/link";
import React from "react";
import { useTheme } from "styled-components";

import * as St from "./DropDowns.styled";

interface Props {
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsDropDown = ({
  showDropDown,
  setShowDropDown,
  setShowMobileNav,
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
    ({ name, local, externalUrl, projectSlug }) =>
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
