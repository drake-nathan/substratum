import { useState } from "react";

import { type ProjectSort, Status, projects } from "../../../data/projects";
import Card from "./Card";
import TabBar from "./TabBar";

interface Props {
  width: number;
}

const Grid = ({ width }: Props): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<ProjectSort>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "minting") {
      return project.status === Status.Minting;
    }
    if (activeTab === "upcoming") {
      return project.status === Status.Upcoming;
    }
    if (activeTab === "closed") {
      return project.status === Status.Closed;
    }
    return true;
  });

  return (
    <div className="mt-20 flex w-full flex-col items-center max-sm:mt-4 ">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} width={width} />

      <hr className="w-full border-[0.5px] border-black dark:border-white" />
      <div
        className="mt-8 grid max-w-[calc(100%-180px)] grid-cols-1 gap-8 max-sm:max-w-[calc(100%-3em)] md:grid-cols-2 xl:grid-cols-3"
        style={{ width }}
      >
        {filteredProjects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
