import * as St from "./LayeredCollection.styled";

interface Props {
  image: string;
}

const OneHundredXImage = ({ image }: Props): JSX.Element => {
  return (
    <St.Container>
      <St.PngImage src={image} alt="100x10x1-a Composite Image" />
    </St.Container>
  );
};

export default OneHundredXImage;
