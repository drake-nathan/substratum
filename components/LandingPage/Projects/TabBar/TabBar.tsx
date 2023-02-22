import { ProjectSort } from '../projects';
import * as St from './TabBar.styled';

interface Props {
  activeTab: ProjectSort;
  setActiveTab: React.Dispatch<React.SetStateAction<ProjectSort>>;
}

const TabBar = ({ activeTab, setActiveTab }: Props): JSX.Element => {
  return (
    <St.Container>
      <St.Title>Projects</St.Title>

      <St.TabsContainer>
        <St.Tab
          className={activeTab === ProjectSort.all ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.all)}
        >
          All
        </St.Tab>

        <St.Tab
          className={activeTab === ProjectSort.minting ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.minting)}
        >
          Minting
        </St.Tab>

        <St.Tab
          className={activeTab === ProjectSort.upcoming ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.upcoming)}
        >
          Upcoming
        </St.Tab>

        <St.Tab
          className={activeTab === ProjectSort.closed ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.closed)}
        >
          Closed
        </St.Tab>
      </St.TabsContainer>
    </St.Container>
  );
};

export default TabBar;
