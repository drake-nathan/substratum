import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { projects, ProjectSort, Project } from '../projects';
import TabBar from '../TabBar/TabBar';
import * as St from './Grid.styled';

const Grid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(ProjectSort.all);
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

      <St.Grid>
        {filteredProjects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </St.Grid>
    </St.Container>
  );
};

export default Grid;
