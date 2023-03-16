import * as St from './Grid.styled';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { projects, ProjectSort, Status, type Project } from '../projects';
import TabBar from '../TabBar/TabBar';
import Card from '../Card/Card';

const Grid = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ProjectSort>(ProjectSort.All);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [pixelWidth, setPixelWidth] = useState<number>(1264);
  const [cardWidth, setCardWidth] = useState<number>(3);
  const [numOfColumns, setNumOfColumns] = useState<number>(3);
  const windowSize = useWindowSize();
  // breakpoints should happen once the

  useEffect(() => {
    if (activeTab === ProjectSort.Minting) {
      setFilteredProjects(
        projects.filter(({ status }) => status === Status.Minting),
      );
    } else if (activeTab === ProjectSort.Upcoming) {
      setFilteredProjects(
        projects.filter(({ status }) => status === Status.Upcoming),
      );
    } else if (activeTab === ProjectSort.Closed) {
      setFilteredProjects(
        projects.filter(({ status }) => status === Status.Closed),
      );
    }
    {
      setFilteredProjects(projects);
    }
  }, [activeTab]);

  return (
    <St.Container>
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        width={pixelWidth}
      />

      <St.Divider />

      <St.Grid width={pixelWidth} columns={numOfColumns}>
        {filteredProjects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </St.Grid>
    </St.Container>
  );
};

export default Grid;
