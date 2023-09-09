import { useState } from "react";
import * as St from "./Shuffler.styled";

const isInRange = (n: number) => {
  if (n <= 100 && n > 0) {
    return n;
  }
  return n > 100 ? 100 : "";
};

const Shuffler = (): JSX.Element => {
  const [tokenID, setTokenID] = useState<"" | number>("");

  return (
    <St.ButtonGrid>
      <St.TopAction>
        <St.TopButton onClick={() => alert("Top")}>Top</St.TopButton>
        <St.ViewLayer>
          <St.IDInput
            placeholder="TokenID to Top"
            onChange={(e) =>
              setTokenID(isInRange(parseInt(e.target.value, 10)))
            }
            value={tokenID}
            type="number"
            max="100"
            step="1"
          />
          <St.ViewButton onClick={() => alert("View")}>
            <St.EyeIcon />
          </St.ViewButton>
        </St.ViewLayer>
      </St.TopAction>
      <St.CutButton
        onClick={() => {
          alert("Cut");
        }}
      >
        Cut
      </St.CutButton>
      <St.OverhandButton onClick={() => alert("Overhand")}>
        Overhand
      </St.OverhandButton>
      <St.FaroButton onClick={() => alert("Faro")}>Faro</St.FaroButton>
      <St.WashButton onClick={() => alert("Wash")}>Wash</St.WashButton>
      <St.ReverseButton onClick={() => alert("Reverse")}>
        Reverse
      </St.ReverseButton>
    </St.ButtonGrid>
  );
};

export default Shuffler;
