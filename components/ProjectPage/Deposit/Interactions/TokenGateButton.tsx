import React, { useState } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

import TokenGateModal from "./TokenGateModal";
import { useDepositInitiative } from "hooks/deposit/useDepositInitiative";
import { useDepositStatus } from "hooks/deposit/useDepositStatus";
import { useModal } from "hooks/useModal";

const TokenGateButton = ({
  tokenId,
}: {
  tokenId: string;
}): React.JSX.Element => {
  const { address } = useAccount();
  const { launchAlertModal } = useModal();
  const depositInitiative = useDepositInitiative();
  const { isDepositOpen } = useDepositStatus();

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!isDepositOpen) {
      launchAlertModal("Deposit is closed at the moment.");
      return;
    }

    if (!address) {
      launchAlertModal("Please connect your wallet");
      return;
    }

    setShowModal(true);
  };

  return (
    <>
      <button
        className="h-14 bg-black text-lg font-bold text-white hover:bg-hover-light max-md:p-2 max-md:text-base max-md:font-semibold max-sm:text-xs"
        onClick={handleClick}
        type="submit"
      >
        SUBMIT{" "}
        {depositInitiative ?
          formatEther(depositInitiative.tokenGateDepositAmount)
        : ""}{" "}
        ETH
      </button>

      {showModal && (
        <TokenGateModal setShowModal={setShowModal} tokenId={tokenId} />
      )}
    </>
  );
};

export default TokenGateButton;
