import { type Method, methodDescriptions } from "../Shuffler/methods";
import type { VisibilityMatrix } from "./Legend";
import * as St from "./Legend.styled";

interface Props {
  isVisible: boolean;
  toggleMatrixProp: (property: keyof VisibilityMatrix) => void;
  method: Method;
}

const LegendCard = ({
  isVisible,
  toggleMatrixProp,
  method,
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
