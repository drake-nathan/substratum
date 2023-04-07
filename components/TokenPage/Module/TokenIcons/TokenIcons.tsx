import MarketIcons from 'components/MarketIcons/MarketIcons';
import { type Project } from 'components/staticData/projects';
import type { IToken } from 'services/azureApi/types';
import * as St from './TokenIcons.styled';
import { Tooltip } from 'react-tooltip';

interface Props {
  token: IToken;
  project: Project;
}

const TokenIcons = ({ token, project }: Props): JSX.Element => {
  const {
    token_id: tokenId,
    generator_url: generatorUrl,
    image,
    svgGen,
  } = token;
  const { isMobileControls } = project;

  const fullScreenUrl = generatorUrl || svgGen || null;

  const mobileUrl = generatorUrl ? new URL(generatorUrl) : null;

  if (mobileUrl) mobileUrl.searchParams.set('mobile', 'true');

  return (
    <St.IconDiv>
      <MarketIcons project={project} tokenId={tokenId} />

      {fullScreenUrl && (
        <a href={fullScreenUrl} target="_blank" rel="noreferrer">
          <St.FullScreenIcon className="icon" id="fullscreen" />

          <Tooltip
            anchorId="fullscreen"
            content={
              svgGen ? 'View SVG full screen' : 'Launch full screen generator'
            }
            positionStrategy="fixed"
          />
        </a>
      )}

      {isMobileControls && mobileUrl && (
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
