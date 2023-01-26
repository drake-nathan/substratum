import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { IToken } from 'services/azureApi/types';
import { type Project } from 'components/LandingPage/Projects/projects';
import { useWindowSize } from 'hooks/useWindowSize';
import TopBar from './TopBar/TopBar';
import Generator from 'components/Generator/Generator';
import Traits from './Traits/Traits';
import * as St from './TokenModule.styled';

interface Props {
  token: IToken;
  project: Project;
}

const TokenModule: React.FC<Props> = ({ token, project }) => {
  const { image, image_mid: imageMid, generator_url: generatorUrl, attributes } = token;
  const { aspectRatio } = project;

  const { windowWidth } = useWindowSize();

  const [width, setWidth] = useState<number>(600);
  const height = aspectRatio ? width / aspectRatio : width;

  useEffect(() => {
    if (windowWidth > 1350) setWidth(600);
    else if (windowWidth <= 1350 && windowWidth > 1250) setWidth(550);
    else if (windowWidth <= 1250 && windowWidth > 1150) setWidth(500);
    else if (windowWidth <= 1150 && windowWidth > 1070) setWidth(400);
    else if (windowWidth <= 1070 && windowWidth > 1000) setWidth(350);
    else if (windowWidth <= 1000 && windowWidth > 800) setWidth(600);
    else if (windowWidth <= 800 && windowWidth > 650) setWidth(500);
    else if (windowWidth <= 650 && windowWidth > 550) setWidth(400);
    else if (windowWidth <= 550 && windowWidth > 450) setWidth(375);
    else if (windowWidth <= 450 && windowWidth > 400) setWidth(350);
    else setWidth(325);
  }, [windowWidth]);

  return (
    <St.Container>
      <TopBar token={token} project={project} />

      <St.InnerContainer height={height} width={width}>
        {generatorUrl ? (
          <Generator generatorUrl={generatorUrl} height={height} width={width} />
        ) : (
          <Image
            src={imageMid || image}
            alt="Token Image"
            width={width}
            height={height}
          />
        )}

        <St.TraitsWrapper>
          <Traits traits={attributes} />
        </St.TraitsWrapper>
      </St.InnerContainer>
    </St.Container>
  );
};

export default TokenModule;