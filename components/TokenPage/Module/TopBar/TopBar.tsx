import { useWindowSize } from 'hooks/useWindowSize';
import type { IToken } from 'services/azureApi/types';
import { type Project } from 'components/LandingPage/Projects/projects';
import TokenIcons from '../TokenIcons/TokenIcons';
import * as St from './TopBar.styled';

interface Props {
  token: IToken;
  project: Project;
}

const TopBar = ({ token, project }: Props): JSX.Element => {
  const { token_id: tokenId, name } = token;
  const { useTokenName } = project;

  const { windowWidth } = useWindowSize();

  const titleText = useTokenName ? name : `#${tokenId}`;

  return (
    <St.Container>
      <St.TokenId>{titleText}</St.TokenId>

      {windowWidth > 650 && <TokenIcons token={token} project={project} />}
    </St.Container>
  );
};

export default TopBar;
