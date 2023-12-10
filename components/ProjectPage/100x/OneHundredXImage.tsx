import { useTokenZeroImage } from "hooks/100x/useTokenZeroImage";

import * as St from "./OneHundredXImage.styled";

const OneHundredXImage = (): JSX.Element => {
  const { data } = useTokenZeroImage("100x10x1-a-goerli");

  return (
    <St.Container>
      <St.PngImage src={data ?? ""} alt="100x10x1-a Token Image" />
    </St.Container>
  );
};

export default OneHundredXImage;
