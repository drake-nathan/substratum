import React, { useState } from "react";

import CancelDepositModal from "./CancelModal";
import BigButton from "components/BigButton";

const CancelButton = (): React.JSX.Element => {
  const [showCancelModal, setShowCancelModal] = useState(false);

  return (
    <>
      <BigButton onClick={() => setShowCancelModal(true)}>
        Cancel Deposit
      </BigButton>

      {showCancelModal && (
        <CancelDepositModal setShowModal={setShowCancelModal} />
      )}
    </>
  );
};

export default CancelButton;
