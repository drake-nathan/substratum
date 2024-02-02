import React from "react";

import type { Project } from "data/projects";

import DepositMain from "./Deposit/DepositMain";
import Details from "./Details/Details";
import Tokens from "./Tokens/Tokens";

interface Props {
  project: Project;
  projectSlug: string;
  tab: "details" | "mint" | "tokens";
}

const ProjectMain = ({
  project,
  projectSlug,
  tab,
}: Props): React.JSX.Element => {
  if (tab === "details") {
    return <Details project={project} />;
  }

  if (tab === "mint") {
    return <DepositMain />;
  }

  return <Tokens project={project} projectSlug={projectSlug} />;
};

export default ProjectMain;
