import React, { useState } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

import { DepositButton as DepositButtonSt } from "../DepositMain.styled";
import DepositSelfModal from "./DepositSelfModal";
import { useDepositInitiative } from "hooks/deposit/useDepositInitiative";
import { useDepositStatus } from "hooks/deposit/useDepositStatus";
import { useModal } from "hooks/useModal";

interface Props {
  recipientAddress: string;
}

const DepositButton = ({ recipientAddress }: Props): React.JSX.Element => {
  const { address } = useAccount();
  const { launchAlertModal } = useModal();
  const depositInitiative = useDepositInitiative();
  const { isDepositOpen } = useDepositStatus();

  const [showDepositSelfModal, setShowDepositSelfModal] = useState(false);
  const [showDepositRecipentModal, setShowDepositRecipentModal] =
    useState(false);

  const handleClick = () => {
    if (!isDepositOpen) {
      launchAlertModal("Deposit is closed at the moment.");
      return;
    }

    if (!address) {
      launchAlertModal("Please connect your wallet");
      return;
    }

    if (recipientAddress) {
      setShowDepositRecipentModal(true);
    } else {
      setShowDepositSelfModal(true);
    }
  };

  return (
    <>
      <DepositButtonSt
        className="hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark"
        onClick={handleClick}
      >
        SUBMIT{" "}
        {depositInitiative ? formatEther(depositInitiative.fullDeposit) : ""}{" "}
        ETH
      </DepositButtonSt>

      {showDepositSelfModal && (
        <DepositSelfModal setShowModal={setShowDepositSelfModal} />
      )}
    </>
  );
};

export default DepositButton;
