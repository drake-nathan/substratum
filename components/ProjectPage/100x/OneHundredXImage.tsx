import * as St from "./OneHundredXImage.styled";

interface Props {
  image: string;
}

const OneHundredXImage = ({ image }: Props): JSX.Element => {
  return (
    <St.Container>
      <St.PngImage src={image} alt="100x10x1-a Token Image" />
    </St.Container>
  );
};

export default OneHundredXImage;
