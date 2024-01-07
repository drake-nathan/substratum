import React from "react";

interface Props {
  aspectRatio?: number;
  generatorUrl: string;
}

const Generator = ({ aspectRatio, generatorUrl }: Props): JSX.Element => (
  <div className="relative overflow-hidden pt-[100%]" style={{ aspectRatio }}>
    <iframe
      className="absolute left-0 top-0 size-full border-none"
      src={generatorUrl}
      title="generator"
    />
  </div>
);

export default Generator;
