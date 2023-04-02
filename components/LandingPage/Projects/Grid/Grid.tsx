import * as St from './Grid.styled';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { projects, ProjectSort, Status, type Project } from '../projects';
import TabBar from '../TabBar/TabBar';
import Card from '../Card/Card';

interface Props {
  width: number;
}

const Grid = ({ width }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ProjectSort>(ProjectSort.All);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === ProjectSort.Minting) {
      return project.status === Status.Minting;
    } else if (activeTab === ProjectSort.Upcoming) {
      return project.status === Status.Upcoming;
    } else if (activeTab === ProjectSort.Closed) {
      return project.status === Status.Closed;
    } else {
      return true;
    }
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
