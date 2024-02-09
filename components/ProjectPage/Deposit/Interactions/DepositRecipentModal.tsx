import React, { useEffect, useState } from "react";
import { type Hash, TransactionExecutionError } from "viem";

import type { SetState } from "utils/types";

import TransactionModal from "components/Modals/TransactionModal";
import { useDepositAndSetRecipent } from "hooks/deposit/useDepositAndSetRecipent";
import { useModal } from "hooks/useModal";

interface Props {
  setShowModal: SetState<boolean>;
}

const DepositRecipentModal = ({ setShowModal }: Props): React.JSX.Element => {
  const { launchAlertModal, launchSuccessModal } = useModal();

  const [loading, setLoading] = useState<boolean>(true);

  const handleSuccess = (hash: Hash) => {
    setLoading(false);
    setShowModal(false);
    launchSuccessModal("Deposit successfully made.", hash);
  };

  const handleError = (error: Error) => {
    if (
      error instanceof TransactionExecutionError &&
      error.message.startsWith("User rejected the request.")
    ) {
      setShowModal(false);
      return;
    }

    launchAlertModal("Something went wrong, please try again.");
    setShowModal(false);
  };

  const { write } = useDepositAndSetRecipent({
    handleError,
    handleSuccess,
  });

  useEffect(() => {
    if (write) setLoading(false);
  }, [write]);

  const proceedHandler = () => {
    setLoading(true);
    write?.();
  };

  return (
    <TransactionModal
      onProceed={proceedHandler}
      setShowModal={setShowModal}
      transactionModalData={{
        header: "Make Deposit",
        loading,
        text: "Click below, when ready, to submit a deposit.",
      }}
    />
  );
};

export default DepositRecipentModal;
