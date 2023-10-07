import React from "react";
import Link from "next/link";
import { useTheme } from "styled-components";
import { projects } from "components/staticData/projects";
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
        <Link key={name} href={`/project/${projectSlug}`}>
          {renderProjectItem(name)}
        </Link>
      ) : (
        <St.RowLink
          key={name}
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
        >
          <St.OpenInNewIcon />
          {renderProjectItem(name)}
        </St.RowLink>
      )
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
