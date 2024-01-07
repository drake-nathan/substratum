import * as St from "./ProjectMenuBar.styled";

interface Props {
  projectSlug: string;
  setTab: (tab: "details" | "tokens") => void;
  tab: string;
}

const ProjectMenuBar = ({ projectSlug, setTab, tab }: Props): JSX.Element => {
  return (
    <div className="sm:px20 flex w-full items-end justify-between border-b border-black px-6 dark:border-white">
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
    </div>
  );
};

export default ProjectMenuBar;
