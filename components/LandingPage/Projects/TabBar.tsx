import type { ProjectSort } from "../../../data/projects";

import Tab from "./Tab";

interface Props {
  activeTab: ProjectSort;
  setActiveTab: React.Dispatch<React.SetStateAction<ProjectSort>>;
  width: number;
}

const TabBar = ({
  activeTab,
  setActiveTab,
  width,
}: Props): React.JSX.Element => (
  <div
    className="flex max-w-[calc(100%-180px)] items-end justify-between max-sm:max-w-[calc(100%-3em)] sm:px-2"
    id="project-tab-bar-container"
    style={{ width }}
  >
    <h2 className="pb-1 max-sm:text-sm">Projects</h2>

    <div
      className="flex items-center gap-2 sm:gap-12"
      id="project-tabs-container"
    >
      <Tab active={activeTab === "all"} onClick={() => setActiveTab("all")}>
        All
      </Tab>

      <Tab
        active={activeTab === "minting"}
        onClick={() => setActiveTab("minting")}
      >
        Minting
      </Tab>

      <Tab
        active={activeTab === "upcoming"}
        onClick={() => setActiveTab("upcoming")}
      >
        Upcoming
      </Tab>

      <Tab
        active={activeTab === "closed"}
        onClick={() => setActiveTab("closed")}
      >
        Closed
      </Tab>
    </div>
  </div>
);

export default TabBar;
