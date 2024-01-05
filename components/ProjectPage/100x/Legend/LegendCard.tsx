import type { VisibilityMatrix } from "./Legend";

import { type Method, methodDescriptions } from "../Shuffler/methods";
import * as St from "./Legend.styled";

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
      <St.ActionTitle onClick={() => toggleMatrixProp(method)}>
        <St.Name>{method.charAt(0).toUpperCase() + method.slice(1)}</St.Name>

        <St.ExpandWrapper>
          <St.ExpandKeyIcon className={isVisible ? "rotated" : ""} />
        </St.ExpandWrapper>
      </St.ActionTitle>

      <St.InfoDropdown className={isVisible ? "" : "hide"}>
        <St.Description>{methodDescriptions[method]}</St.Description>

        <St.PriceInfo>There will be a small fee for this action.</St.PriceInfo>
      </St.InfoDropdown>
    </>
  );
};

export default LegendCard;
