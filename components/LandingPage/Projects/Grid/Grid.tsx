import { useState } from "react";

import { projects, ProjectSort, Status } from "../../../staticData/projects";
import Card from "../Card/Card";
import TabBar from "../TabBar/TabBar";
import * as St from "./Grid.styled";

interface Props {
  width: number;
}

const Grid = ({ width }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ProjectSort>(ProjectSort.All);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === ProjectSort.Minting) {
      return project.status === Status.Minting;
    }
    if (activeTab === ProjectSort.Upcoming) {
      return project.status === Status.Upcoming;
    }
    if (activeTab === ProjectSort.Closed) {
      return project.status === Status.Closed;
    }
    return true;
  });

  return (
    <St.Container>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} width={width} />

      <St.Divider />
      <St.Grid width={width}>
        {filteredProjects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </St.Grid>
    </St.Container>
  );
};

export default Grid;
