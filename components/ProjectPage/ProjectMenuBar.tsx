import * as St from "./ProjectMenuBar.styled";

interface Props {
  projectSlug: string | string[];
  tab: string;
  setTab: (tab: "details" | "tokens") => void;
}

const ProjectMenuBar = ({ projectSlug, tab, setTab }: Props): JSX.Element => (
  <St.Container>
    <St.TabsContainer>
      <St.Tab
        className={tab === "details" ? "active" : ""}
        onClick={() => setTab("details")}
      >
        Details
      </St.Tab>
      <St.Tab
        hidden={projectSlug === "100x10x1-a"}
        className={tab === "tokens" ? "active" : ""}
        onClick={() => setTab("tokens")}
      >
        Tokens
      </St.Tab>
    </St.TabsContainer>
  </St.Container>
);

export default ProjectMenuBar;
