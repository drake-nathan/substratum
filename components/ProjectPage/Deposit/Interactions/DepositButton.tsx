import React, { useState } from "react";
import { type Address, formatEther } from "viem";
import { useAccount } from "wagmi";

import DepositRecipentModal from "./DepositRecipentModal";
import DepositSelfModal from "./DepositSelfModal";
import { useAllowlist } from "hooks/deposit/useDepositAllowlist";
import { useDepositInitiative } from "hooks/deposit/useDepositInitiative";
import { useDepositStatus } from "hooks/deposit/useDepositStatus";
import { useModal } from "hooks/useModal";

const DepositButton = ({
  recipientAddress,
}: {
  recipientAddress: string;
}): React.JSX.Element => {
  const { address } = useAccount();
  const { launchAlertModal } = useModal();
  const depositInitiative = useDepositInitiative();
  const { isDepositOpen, isMintPrivate } = useDepositStatus();
  const allowlist = useAllowlist();

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

    if (isMintPrivate) {
      if (allowlist) {
        if (!allowlist.includes(address)) {
          launchAlertModal(
            "This account is not on the allowlist, come back for the public phase",
          );
          return;
        }
      } else {
        launchAlertModal(
          "Deposit is in private phase, but we are struggling to load the allowlist. Please try again later.",
        );
        return;
      }
    }

    if (recipientAddress) {
      setShowDepositRecipentModal(true);
    } else {
      setShowDepositSelfModal(true);
    }
  };

  return (
    <>
      <button
        className="h-14 bg-black text-lg font-bold text-white hover:bg-hover-light max-md:p-2 max-md:text-base max-md:font-semibold max-sm:text-xs"
        onClick={handleClick}
        type="submit"
      >
        SUBMIT{" "}
        {depositInitiative ? formatEther(depositInitiative.fullDeposit) : ""}{" "}
        ETH
      </button>

      {showDepositSelfModal && (
        <DepositSelfModal setShowModal={setShowDepositSelfModal} />
      )}

      {showDepositRecipentModal && (
        <DepositRecipentModal
          recipientAddress={recipientAddress as Address}
          setShowModal={setShowDepositSelfModal}
        />
      )}
    </>
  );
};

export default DepositButton;
