import { useState } from "react";

import type { ProjectSort } from "../../data/projects";

import Tab from "../LandingPage/Projects/Tab";

interface Props {
  mainContent: string;
  setMainContent: React.Dispatch<React.SetStateAction<string>>;
  width: number;
}

const ArtistTabBar = ({
  mainContent,
  setMainContent,
  width,
}: Props): React.JSX.Element => (
  <div
    className="flex max-w-[calc(100%-180px)] items-start justify-between max-sm:max-w-[calc(100%-3em)] sm:px-2"
    id="project-tab-bar-container"
    style={{ width }}
  >
    <div
      className="flex items-center gap-2 sm:gap-12"
      id="project-tabs-container"
    >
      <Tab
        active={mainContent === "projects"}
        onClick={() => setMainContent("projects")}
      >
        Projects
      </Tab>

      <Tab
        active={mainContent === "collectors"}
        onClick={() => setMainContent("collectors")}
      >
        Collectors
      </Tab>
    </div>
  </div>
);

export default ArtistTabBar;
