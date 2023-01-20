import React from 'react';
import * as St from './Generator.styled';

interface Props {
  generatorUrl: string;
  height: number;
  width: number;
}

const Generator: React.FC<Props> = ({ generatorUrl, height, width }) => {
  return (
    <St.FrameWrapper height={height} width={width}>
      <iframe src={generatorUrl} title="generator"></iframe>
    </St.FrameWrapper>
  );
};

export default Generator;
