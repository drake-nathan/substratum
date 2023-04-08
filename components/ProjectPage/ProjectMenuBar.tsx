import { useState } from 'react';
import * as St from './ProjectMenuBar.styled';

interface Props {
  projectSlug: string | string[];
  tab: string;
  setTab: (tab: any) => void;
}

const ProjectMenuBar = ({ projectSlug, tab, setTab }: Props): JSX.Element => {
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
          hidden={projectSlug === '100x10x1-a' ? true : false}
          className={tab === 'tokens' ? 'active' : ''}
          onClick={() => setTab('tokens')}
        >
          Tokens
        </St.Tab>
      </St.TabsContainer>
    </St.Container>
  ); // TODO make an enum for the tabs
};

export default ProjectMenuBar;
