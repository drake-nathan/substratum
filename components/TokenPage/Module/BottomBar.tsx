import type { Project } from "data/projects";
import type { IToken } from "services/azureApi/types";

import TokenIcons from "./TokenIcons";

interface Props {
  project: Project;
  token: IToken;
}

const BottomBar = ({ project, token }: Props): JSX.Element => (
  <div className="w-full p-4">
    <TokenIcons project={project} token={token} />
  </div>
);

export default BottomBar;
