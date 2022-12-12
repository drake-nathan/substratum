import React from 'react';
import Card from '../Card/Card';
import { projects } from '../projects';
import * as St from './Grid.styled';

const Grid: React.FC = () => {
  return (
    <St.Container>
      <St.Header>
        <St.Title>PROJECTS</St.Title>
      </St.Header>
      <St.Grid>
        {projects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </St.Grid>
    </St.Container>
  );
};

export default Grid;
