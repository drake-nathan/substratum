import React from "react";

import * as St from "./Generator.styled";

interface Props {
  aspectRatio?: number;
  generatorUrl: string;
}

const Generator = ({ aspectRatio, generatorUrl }: Props): JSX.Element => (
  <St.FrameWrapper $aspectRatio={aspectRatio}>
    <iframe src={generatorUrl} title="generator" />
  </St.FrameWrapper>
);

export default Generator;
