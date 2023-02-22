import * as St from './Grid.styled';
import { useState, useEffect } from 'react';
import { projects, ProjectSort, type Project } from '../projects';
import TabBar from '../TabBar/TabBar';
import Card from '../Card/Card';

const Grid = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ProjectSort>(ProjectSort.all);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeTab === ProjectSort.minting) {
      setFilteredProjects(projects.filter((project) => project.mintable));
    } else if (activeTab === ProjectSort.upcoming) {
      setFilteredProjects(projects.filter((project) => project.upcoming));
    } else {
      setFilteredProjects(projects);
    }
  }, [activeTab]);

  return (
    <St.Container>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <St.Divider />

      <St.Grid>
        {filteredProjects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </St.Grid>
    </St.Container>
  );
};

export default Grid;
