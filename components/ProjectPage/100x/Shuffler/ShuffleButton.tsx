import React, { useState } from "react";
import { isAddress } from "viem";
import { useAccount } from "wagmi";

import { useReadOneHundredXShuffleable } from "../../../../wagmi/generated";
import ShuffleModal from "./ShuffleModal";
import { type Method, methods } from "./methods";
import BigButton from "components/BigButton";
import { useMethodFees } from "hooks/100x/useMethodFees";
import { useModal } from "hooks/useModal";

interface Props {
  method: Method;
  vault: string;
}

const ShuffleButton = ({ method, vault }: Props): React.JSX.Element => {
  const methodId = methods[method];

  const { launchAlertModal } = useModal();
  const { address } = useAccount();
  const { methodFees } = useMethodFees();
  const { data: shuffleable } = useReadOneHundredXShuffleable();

  const [showShuffleModal, setShowShuffleModal] = useState<boolean>(false);

  const handleClick = () => {
    if (!address) {
      launchAlertModal("Please connect your wallet");
      return;
    }

    if (!methodFees) {
      launchAlertModal(
        "We're having trouble getting data from the blockchain at the moment. Please try again later or with a better connection.",
      );
      return;
    }

    if (shuffleable === false) {
      launchAlertModal("Shuffling is not currently enabled.");
      return;
    }

    if (vault && !isAddress(vault)) {
      launchAlertModal("Please enter a valid vault address");
      return;
    }

    setShowShuffleModal(true);
  };

  return (
    <>
      <BigButton onClick={handleClick} style={{ gridArea: method }}>
        {method}
      </BigButton>

      {address &&
        methodFees &&
        showShuffleModal &&
        (vault === "" || isAddress(vault)) && (
          <ShuffleModal
            address={address}
            method={method}
            methodFee={methodFees[methodId]}
            setShowModal={setShowShuffleModal}
            vault={vault || undefined}
          />
        )}
    </>
  );
};

export default ShuffleButton;
