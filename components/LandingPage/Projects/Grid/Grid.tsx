import { useState } from "react";
import * as St from "./Grid.styled";
import { ProjectSort, Status, projects } from "../../../staticData/projects";
import TabBar from "../TabBar/TabBar";
import Card from "../Card/Card";

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
