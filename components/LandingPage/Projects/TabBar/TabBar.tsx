import type { ProjectSort } from "../../../../data/projects";

import * as St from "./TabBar.styled";

interface Props {
  activeTab: ProjectSort;
  setActiveTab: React.Dispatch<React.SetStateAction<ProjectSort>>;
  width: number;
}

const TabBar = ({ activeTab, setActiveTab, width }: Props): JSX.Element => (
  <St.Container width={width}>
    <St.Title>Projects</St.Title>

    <St.TabsContainer>
      <St.Tab
        className={activeTab === "all" ? "active" : ""}
        onClick={() => setActiveTab("all")}
      >
        All
      </St.Tab>

      <St.Tab
        className={activeTab === "minting" ? "active" : ""}
        onClick={() => setActiveTab("minting")}
      >
        Minting
      </St.Tab>

      <St.Tab
        className={activeTab === "upcoming" ? "active" : ""}
        onClick={() => setActiveTab("upcoming")}
      >
        Upcoming
      </St.Tab>

      <St.Tab
        className={activeTab === "closed" ? "active" : ""}
        onClick={() => setActiveTab("closed")}
      >
        Closed
      </St.Tab>
    </St.TabsContainer>
  </St.Container>
);

export default TabBar;
