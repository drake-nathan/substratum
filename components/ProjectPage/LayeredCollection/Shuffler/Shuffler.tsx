import { useMethodFees } from "hooks/useMethodFees";
import { useModal } from "hooks/useModal";
import { useShuffle } from "hooks/useShuffle";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

import {
  type Method,
  methodDescriptions,
  type MethodId,
  methods,
} from "./methods";
import * as St from "./Shuffler.styled";

const isInRange = (n: number) => {
  if (n <= 100 && n > 0) {
    return n;
  }
  return n > 100 ? 100 : "";
};

const Shuffler = (): JSX.Element => {
  const [tokenID, setTokenID] = useState<"" | number>("");
  const [method, setMethod] = useState<Method>();

  const { launchAlertModal, launchTransactionModal, setTransactionModalData } =
    useModal();

  const { methodFees } = useMethodFees();

  const { write, data } = useShuffle({
    handleError: (error) => launchAlertModal(error),
    payableAmount: methodFees[1],
    method,
    setMethod,
  });

  useEffect(() => {
    if (write) {
      setTransactionModalData((prev) => ({ ...prev, loading: false }));
    }
  }, [setTransactionModalData, write]);

  const clickHandler = (method: Method) => {
    const methodId: MethodId = methods[method];
    setMethod(method);

    const fee = formatEther(methodFees[methodId]);

    const subText = `This method will cost ${fee} ETH.`;

    launchTransactionModal(method, methodDescriptions[method], subText);
  };

  return (
    <St.ButtonGrid>
      <St.TopAction>
        <St.TopButton>Top</St.TopButton>

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

      <St.CutButton onClick={() => clickHandler("cut")}>Cut</St.CutButton>

      <St.OverhandButton onClick={() => clickHandler("overhand")}>
        Overhand
      </St.OverhandButton>

      <St.FaroButton onClick={() => clickHandler("faro")}>Faro</St.FaroButton>

      <St.WashButton onClick={() => clickHandler("wash")}>Wash</St.WashButton>

      <St.ReverseButton onClick={() => clickHandler("reverse")}>
        Reverse
      </St.ReverseButton>
    </St.ButtonGrid>
  );
};

export default Shuffler;
