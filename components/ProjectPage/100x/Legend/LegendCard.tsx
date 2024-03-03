import { clsx } from "clsx";
import { FaPlus } from "react-icons/fa";

import type { VisibilityMatrix } from "./Legend";

import { type Method, methodDescriptions } from "../Shuffler/methods";

interface Props {
  isVisible: boolean;
  method: Method;
  toggleMatrixProp: (property: keyof VisibilityMatrix) => void;
}

const LegendCard = ({
  isVisible,
  method,
  toggleMatrixProp,
}: Props): JSX.Element => {
  return (
    <>
      <div
        className="flex cursor-pointer items-center justify-between border-2 border-black bg-white p-4 dark:border-white dark:bg-black"
        id="legend-action-title"
        onClick={() => toggleMatrixProp(method)}
      >
        <h4 className="font-sans text-2xl capitalize">{method}</h4>

        <span className="flex items-center rounded-2xl bg-black p-2 dark:bg-white">
          <FaPlus
            className={clsx(
              "text-white duration-500 dark:text-black",
              isVisible ? "rotate-[135deg]" : "",
            )}
          />
        </span>
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4 overflow-hidden bg-black transition-all duration-500 dark:bg-white",
          isVisible ? "max-h-[80%] p-4" : "max-h-0 py-0",
        )}
      >
        <p className="text-white dark:text-black">
          {methodDescriptions[method]}
        </p>

        <p className="text-hover-light dark:text-hover-dark">
          There will be a small fee for this action.
        </p>
      </div>
    </>
  );
};

export default LegendCard;
