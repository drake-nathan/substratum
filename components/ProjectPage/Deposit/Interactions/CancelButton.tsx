import React, { useState } from "react";
import { useAccount } from "wagmi";

import { CancelButton as CancelButtonSt } from "../DepositMain.styled";
import CancelDepositModal from "./CancelModal";
import { useModal } from "hooks/useModal";

const CancelButton = (): React.JSX.Element => {
  const { address } = useAccount();
  const { launchAlertModal } = useModal();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleClick = () => {
    if (!address) {
      launchAlertModal("Please connect your wallet");
      return;
    }

    setShowCancelModal(true);
  };

  return (
    <>
      <CancelButtonSt
        className="hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark"
        onClick={handleClick}
      >
        CANCEL DEPOSIT
      </CancelButtonSt>

      {showCancelModal && (
        <CancelDepositModal setShowModal={setShowCancelModal} />
      )}
    </>
  );
};

export default CancelButton;
