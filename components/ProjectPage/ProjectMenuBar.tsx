import { useState } from 'react';
import * as St from './ProjectMenuBar.styled';

interface Props {
  tab: string;
  setTab: (tab: any) => void;
}

const ProjectMenuBar = ({ tab, setTab }: Props): JSX.Element => {
  return (
    <St.Container>
      <St.TabsContainer>
        <St.Tab
          className={tab === 'details' ? 'active' : ''}
          onClick={() => setTab('details')}
        >
          Details
        </St.Tab>
        <St.Tab
          className={tab === 'all-outputs' ? 'active' : ''}
          onClick={() => setTab('all-outputs')}
        >
          All Outputs
        </St.Tab>
      </St.TabsContainer>
    </St.Container>
  ); // TODO make an enum for the tabs
};

export default ProjectMenuBar;