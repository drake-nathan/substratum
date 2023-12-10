import { useTokenZeroImage } from "hooks/100x/useTokenZeroImage";
import { BarLoader } from "react-spinners";
import { useTheme } from "styled-components";

import * as St from "./OneHundredXImage.styled";

const OneHundredXImage = (): JSX.Element => {
  const { colors } = useTheme();
  const { data, error } = useTokenZeroImage();

  if (error)
    return (
      <St.Container>
        <h3>Error fetching composite image</h3>.
      </St.Container>
    );

  if (data) {
    return (
      <St.Container>
        <St.PngImage src={data} alt="100x10x1-a Token Image" />
      </St.Container>
    );
  }

  return (
    <St.Container>
      <h3>Loading composite image...</h3>
      <BarLoader color={colors.textMain} height={6} width={300} />
    </St.Container>
  );
};

export default OneHundredXImage;
