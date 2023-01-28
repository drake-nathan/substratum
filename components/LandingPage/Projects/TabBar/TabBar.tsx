import { ProjectSort } from '../projects';
import * as St from './TabBar.styled';

interface Props {
  activeTab: ProjectSort;
  setActiveTab: React.Dispatch<React.SetStateAction<ProjectSort>>;
}

const TabBar = ({ activeTab, setActiveTab }: Props): JSX.Element => {
  return (
    <St.Container>
      <St.TitleContainer>
        <St.Title>PROJECTS</St.Title>
      </St.TitleContainer>

      <St.TabsContainer>
        <St.Tab
          className={activeTab === ProjectSort.all ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.all)}
        >
          ALL
        </St.Tab>
        <St.Tab
          className={activeTab === ProjectSort.minting ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.minting)}
        >
          MINTING
        </St.Tab>
        <St.Tab
          className={activeTab === ProjectSort.upcoming ? 'active' : ''}
          onClick={() => setActiveTab(ProjectSort.upcoming)}
        >
          UPCOMING
        </St.Tab>
      </St.TabsContainer>
    </St.Container>
  );
};

export default TabBar;
