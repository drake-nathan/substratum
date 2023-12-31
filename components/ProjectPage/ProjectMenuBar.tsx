import * as St from "./ProjectMenuBar.styled";

interface Props {
  setTab: (tab: "details" | "tokens") => void;
  tab: string;
}

const ProjectMenuBar = ({ setTab, tab }: Props): JSX.Element => (
  <St.Container>
    <St.TabsContainer>
      <St.Tab
        className={tab === "details" ? "active" : ""}
        onClick={() => setTab("details")}
      >
        Details
      </St.Tab>
      <St.Tab
        className={tab === "tokens" ? "active" : ""}
        onClick={() => setTab("tokens")}
      >
        Tokens
      </St.Tab>
    </St.TabsContainer>
  </St.Container>
);

export default ProjectMenuBar;
