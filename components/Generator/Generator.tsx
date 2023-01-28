import React from 'react';
import * as St from './Generator.styled';

interface Props {
  generatorUrl: string;
  height: number;
  width: number;
}

const Generator = ({ generatorUrl, height, width }: Props): JSX.Element => {
  return (
    <St.FrameWrapper height={height} width={width}>
      <iframe src={generatorUrl} title="generator"></iframe>
    </St.FrameWrapper>
  );
};

export default Generator;
