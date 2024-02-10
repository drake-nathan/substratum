/* eslint-disable @next/next/no-img-element */

import Generator from "components/Generator";

interface Props {
  aspectRatio: number;
  generatorUrl: string | undefined;
  image: string;
  imageMid: string | undefined;
}

const TokenImage = ({ aspectRatio, generatorUrl, image, imageMid }: Props) => {
  if (generatorUrl) return <Generator generatorUrl={generatorUrl} />;

  return (
    <img
      alt="Token Image"
      className="w-full border-b border-black object-cover dark:border-white"
      src={imageMid || image}
      style={{ aspectRatio }}
    />
  );
};

export default TokenImage;
