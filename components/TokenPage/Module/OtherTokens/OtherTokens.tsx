import { Project } from 'components/LandingPage/Projects/projects';
import { IToken } from 'services/azureApi/types';
import * as St from './OtherTokens.styled';

interface Props {
  token: IToken;
  project: Project;
}

const OtherTokens = ({ token, project }: Props): JSX.Element => {
  return (
    <St.OtherTokensContainer>
      <St.OtherTokensHeader>Other Tokens</St.OtherTokensHeader>
      <St.OtherTokens></St.OtherTokens>
    </St.OtherTokensContainer>
  );
};

export default OtherTokens;
