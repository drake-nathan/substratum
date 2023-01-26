import React from 'react';
import type { IToken } from 'services/azureApi/types';
import { type Project } from 'components/LandingPage/Projects/projects';
import * as St from './TopBar.styled';

interface Props {
  token: IToken;
  project: Project;
}

const TopBar: React.FC<Props> = ({ token, project }) => {
  const { token_id: tokenId, generator_url: generatorUrl, image, name } = token;
  const { isMobileControls, useTokenName } = project;

  const fullScreenUrl = generatorUrl || image;

  const mobileUrl = new URL(generatorUrl);
  mobileUrl.searchParams.set('mobile', 'true');

  const titleText = useTokenName ? name : `#${tokenId}`;

  return (
    <St.Container>
      <St.TokenId>{titleText}</St.TokenId>

      <St.IconDiv>
        <a href={fullScreenUrl} target="_blank" rel="noreferrer">
          <St.FullScreenIcon className="icon" />
        </a>

        {isMobileControls && (
          <a href={mobileUrl.toString()} target="_blank" rel="noreferrer">
            <St.MobileIcon className="icon mobile" />
          </a>
        )}
      </St.IconDiv>
    </St.Container>
  );
};

export default TopBar;
