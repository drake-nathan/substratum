import { type Project } from "components/staticData/projects";
import type { IToken } from "services/azureApi/types";

import TokenIcons from "../TokenIcons/TokenIcons";
import * as St from "./BottomBar.styled";

interface Props {
  token: IToken;
  project: Project;
}

const BottomBar = ({ token, project }: Props): JSX.Element => (
  <St.Container>
    <TokenIcons project={project} token={token} />
  </St.Container>
);

export default BottomBar;
