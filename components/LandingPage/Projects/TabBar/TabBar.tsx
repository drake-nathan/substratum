import { ProjectSort } from '../../../_staticData/projects';
import * as St from './TabBar.styled';

interface Props {
  activeTab: ProjectSort;
  setActiveTab: React.Dispatch<React.SetStateAction<ProjectSort>>;
  width: number;
}

const TabBar = ({ activeTab, setActiveTab, width }: Props): JSX.Element => {
  return (
    <St.Container width={width}>
      <St.Title>Projects</St.Title>

      <St.TabsContainer>
        <St.Tab
          className={activeTab === ProjectSort.All ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.All)}
        >
          All
        </St.Tab>

        <St.Tab
          className={activeTab === ProjectSort.Minting ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.Minting)}
        >
          Minting
        </St.Tab>

        <St.Tab
          className={activeTab === ProjectSort.Upcoming ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.Upcoming)}
        >
          Upcoming
        </St.Tab>

        <St.Tab
          className={activeTab === ProjectSort.Closed ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.Closed)}
        >
          Closed
        </St.Tab>
      </St.TabsContainer>
    </St.Container>
  );
};

export default TabBar;
