import { styled } from "styled-components";

import Generator from "components/Generator";

const Image = styled.img<{ $aspectRatio: number }>`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  object-fit: cover;
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
`;

interface Props {
  aspectRatio: number;
  generatorUrl: string | undefined;
  image: string;
  imageMid: string | undefined;
}

const TokenImage = ({ aspectRatio, generatorUrl, image, imageMid }: Props) => {
  if (generatorUrl) return <Generator generatorUrl={generatorUrl} />;

  return (
    <Image
      $aspectRatio={aspectRatio}
      alt="Token Image"
      src={imageMid || image}
    />
  );
};

export default TokenImage;
