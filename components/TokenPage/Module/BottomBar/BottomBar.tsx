import { useWindowSize } from 'hooks/useWindowSize';
import type { IToken } from 'services/azureApi/types';
import { type Project } from 'components/staticData/projects';
import TokenIcons from '../TokenIcons/TokenIcons';
import * as St from './BottomBar.styled';

interface Props {
  token: IToken;
  project: Project;
}

const BottomBar = ({ token, project }: Props): JSX.Element => {
  const { token_id: tokenId, name } = token;
  const { useTokenName } = project;

  const { windowWidth } = useWindowSize();

  const titleText = useTokenName ? name : `#${tokenId}`;

  return (
    <St.Container>
      <TokenIcons token={token} project={project} />
    </St.Container>
  );
};

export default BottomBar;
