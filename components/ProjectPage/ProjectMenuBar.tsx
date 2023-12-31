import * as St from "./ProjectMenuBar.styled";

interface Props {
  projectSlug: string;
  setTab: (tab: "details" | "tokens") => void;
  tab: string;
}

const ProjectMenuBar = ({ projectSlug, setTab, tab }: Props): JSX.Element => {
  return (
    <St.Container>
      <St.TabsContainer>
        <St.Tab
          className={tab === "details" ? "active" : ""}
          onClick={() => setTab("details")}
        >
          {projectSlug === "100x10x1-a-goerli" || projectSlug === "100x10x1-a"
            ? "Shuffler"
            : "Details"}
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
};

export default ProjectMenuBar;
