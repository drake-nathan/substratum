import MarketIcons from 'components/MarketIcons/MarketIcons';
import { type Project } from 'components/LandingPage/Projects/projects';
import type { IToken } from 'services/azureApi/types';
import * as St from './TokenIcons.styled';
import { Tooltip } from 'react-tooltip';

interface Props {
  token: IToken;
  project: Project;
}

const TokenIcons = ({ token, project }: Props): JSX.Element => {
  const { token_id: tokenId, generator_url: generatorUrl, image, name } = token;
  const { isMobileControls } = project;

  const fullScreenUrl = generatorUrl || image;

  const mobileUrl = new URL(generatorUrl);
  mobileUrl.searchParams.set('mobile', 'true');

  return (
    <St.IconDiv>
      <MarketIcons project={project} tokenId={tokenId} />

      <a href={fullScreenUrl} target="_blank" rel="noreferrer">
        <St.FullScreenIcon className="icon" id="fullscreen" />

        <Tooltip
          anchorId="fullscreen"
          content="Launch full screen generator"
          positionStrategy="fixed"
        />
      </a>

      {isMobileControls && (
        <a href={mobileUrl.toString()} target="_blank" rel="noreferrer">
          <St.MobileIcon className="icon mobile" id="mobile" />

          <Tooltip
            anchorId="mobile"
            content="Launch generator with mobile controls"
            positionStrategy="fixed"
          />
        </a>
      )}
    </St.IconDiv>
  );
};

export default TokenIcons;
