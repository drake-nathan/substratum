import Generator from "components/Generator/Generator";
import OneHundredXImage from "components/ProjectPage/100x/OneHundredXImage";
import { ProjectSlug } from "services/azureApi/types";
import styled from "styled-components";

const Image = styled.img<{ $aspectRatio: number }>`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  object-fit: cover;
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
`;

type Props = {
  aspectRatio: number;
  generatorUrl: string | undefined;
  height: number;
  image: string;
  imageMid: string | undefined;
  projectSlug: string;
  tokenId: number;
  width: number;
};

const TokenImage = ({
  aspectRatio,
  generatorUrl,
  height,
  image,
  imageMid,
  projectSlug,
  tokenId,
  width,
}: Props) => {
  const isCompositeImage =
    projectSlug === ProjectSlug["100x10x1-a-goerli"] && tokenId === 0;

  if (isCompositeImage)
    return (
      <div style={{ height, width }}>
        <OneHundredXImage />
      </div>
    );

  if (generatorUrl)
    return (
      <Generator generatorUrl={generatorUrl} height={height} width={width} />
    );

  return (
    <Image
      src={imageMid || image}
      alt="Token Image"
      $aspectRatio={aspectRatio}
    />
  );
};

export default TokenImage;
