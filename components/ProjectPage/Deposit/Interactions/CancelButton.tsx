import React, { useState } from "react";
import { useAccount } from "wagmi";

import CancelDepositModal from "./CancelModal";
import { useDepositStatus } from "hooks/deposit/useDepositStatus";
import { useModal } from "hooks/useModal";

const CancelButton = (): React.JSX.Element => {
  const { address } = useAccount();
  const { launchAlertModal } = useModal();
  const { isDepositOpen } = useDepositStatus();

  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleClick = () => {
    if (!isDepositOpen) {
      launchAlertModal("Deposit is closed at the moment.");
      return;
    }

    if (!address) {
      launchAlertModal("Please connect your wallet");
      return;
    }

    setShowCancelModal(true);
  };

  return (
    <>
      <button
        className="mt-5 h-16 w-96 bg-black text-lg font-bold uppercase text-white hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark max-sm:w-full max-sm:p-2 max-sm:text-base max-sm:font-semibold"
        onClick={handleClick}
      >
        Cancel Deposit
      </button>

      {showCancelModal && (
        <CancelDepositModal setShowModal={setShowCancelModal} />
      )}
    </>
  );
};

export default CancelButton;
