import { clsx } from "clsx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import LegendCard from "./LegendCard";
import st from "./legend.module.css";

export class VisibilityMatrix {
  cut = false;
  faro = false;
  legend = false;
  overhand = false;
  reverse = false;
  top = false;
  wash = false;
}

const Legend = () => {
  const [isVisible, setIsVisible] = useState(new VisibilityMatrix());

  const toggleMatrixProp = (property: keyof VisibilityMatrix) => {
    setIsVisible({ ...isVisible, [property]: !isVisible[property] });
  };

  return (
    <div className="col-span-2" id="legend-container">
      <h3
        className="flex cursor-pointer items-center justify-between border-b border-black pb-1 dark:border-white"
        id="legend-title"
        onClick={() => toggleMatrixProp("legend")}
      >
        Legend
        <FaPlus
          className={clsx(
            "cursor-pointer p-1 text-2xl duration-700",
            isVisible.legend && "rotate-[135deg]",
          )}
        />
      </h3>

      <div
        className={clsx(
          "grid w-full gap-4 overflow-hidden transition-all duration-500",
          isVisible.legend ? "my-4 max-h-full" : "m-0 max-h-0",
          st.grid,
        )}
        id="legend-grid"
      >
        <div style={{ gridArea: "top" }}>
          <LegendCard
            isVisible={isVisible.top}
            method="top"
            toggleMatrixProp={toggleMatrixProp}
          />
        </div>
        <div style={{ gridArea: "cut" }}>
          <LegendCard
            isVisible={isVisible.cut}
            method="cut"
            toggleMatrixProp={toggleMatrixProp}
          />
        </div>
        <div style={{ gridArea: "faro" }}>
          <LegendCard
            isVisible={isVisible.faro}
            method="faro"
            toggleMatrixProp={toggleMatrixProp}
          />
        </div>
        <div style={{ gridArea: "overhand" }}>
          <LegendCard
            isVisible={isVisible.overhand}
            method="overhand"
            toggleMatrixProp={toggleMatrixProp}
          />
        </div>
        <div style={{ gridArea: "wash" }}>
          <LegendCard
            isVisible={isVisible.wash}
            method="wash"
            toggleMatrixProp={toggleMatrixProp}
          />
        </div>
        <div style={{ gridArea: "reverse" }}>
          <LegendCard
            isVisible={isVisible.reverse}
            method="reverse"
            toggleMatrixProp={toggleMatrixProp}
          />
        </div>
      </div>
    </div>
  );
};

export default Legend;
