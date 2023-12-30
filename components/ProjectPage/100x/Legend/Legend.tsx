import { useState } from "react";

import * as St from "./Legend.styled";
import LegendCard from "./LegendCard";

export class VisibilityMatrix {
  legend = false;

  top = false;

  cut = false;

  faro = false;

  overhand = false;

  wash = false;

  reverse = false;
}

const Legend = () => {
  const [isVisible, setIsVisible] = useState(new VisibilityMatrix());

  const toggleMatrixProp = (property: keyof VisibilityMatrix) => {
    setIsVisible({ ...isVisible, [property]: !isVisible[property] });
  };

  return (
    <St.Container>
      <St.LegendHeader onClick={() => toggleMatrixProp("legend")}>
        Legend
        <St.ExpandSectionIcon className={isVisible.legend ? "rotated" : ""} />
      </St.LegendHeader>
      <St.LegendGrid className={isVisible.legend ? "" : "hide"}>
        <St.Top>
          <LegendCard
            isVisible={isVisible.top}
            method="top"
            toggleMatrixProp={toggleMatrixProp}
          />
        </St.Top>
        <St.Cut>
          <LegendCard
            isVisible={isVisible.cut}
            method="cut"
            toggleMatrixProp={toggleMatrixProp}
          />
        </St.Cut>
        <St.Faro>
          <LegendCard
            isVisible={isVisible.faro}
            method="faro"
            toggleMatrixProp={toggleMatrixProp}
          />
        </St.Faro>
        <St.Overhand>
          <LegendCard
            isVisible={isVisible.overhand}
            method="overhand"
            toggleMatrixProp={toggleMatrixProp}
          />
        </St.Overhand>
        <St.Wash>
          <LegendCard
            isVisible={isVisible.wash}
            method="wash"
            toggleMatrixProp={toggleMatrixProp}
          />
        </St.Wash>
        <St.Reverse>
          <LegendCard
            isVisible={isVisible.reverse}
            method="reverse"
            toggleMatrixProp={toggleMatrixProp}
          />
        </St.Reverse>
      </St.LegendGrid>
    </St.Container>
  );
};

export default Legend;
