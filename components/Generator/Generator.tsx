import React from "react";

import * as St from "./Generator.styled";

interface Props {
  generatorUrl: string;
  aspectRatio?: number;
}

const Generator = ({ generatorUrl, aspectRatio }: Props): JSX.Element => (
  <St.FrameWrapper $aspectRatio={aspectRatio}>
    <iframe src={generatorUrl} title="generator" />
  </St.FrameWrapper>
);

export default Generator;
