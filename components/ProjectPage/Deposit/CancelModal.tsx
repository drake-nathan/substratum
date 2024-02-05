import React, { useEffect, useState } from "react";
import {
  ContractFunctionExecutionError,
  type Hash,
  TransactionExecutionError,
} from "viem";

import type { SetState } from "utils/types";

import TransactionModal from "components/Modals/TransactionModal";
import { useCancelDeposit } from "hooks/deposit/useCancelDeposit";
import { useModal } from "hooks/useModal";

interface Props {
  setShowModal: SetState<boolean>;
}

const CancelDepositModal = ({ setShowModal }: Props): React.JSX.Element => {
  const { launchAlertModal, launchSuccessModal } = useModal();

  const [loading, setLoading] = useState<boolean>(true);

  const handleSuccess = (hash: Hash) => {
    setLoading(false);
    setShowModal(false);
    launchSuccessModal("Deposit successfully cancelled.", hash);
  };

  const handleError = (error: Error) => {
    if (
      error instanceof TransactionExecutionError &&
      error.message.startsWith("User rejected the request.")
    ) {
      setShowModal(false);
      return;
    }

    if (
      error instanceof ContractFunctionExecutionError &&
      error.message.includes("Address has not deposited")
    ) {
      launchAlertModal(
        "This address has not deposited, so there is currently nothing to cancel.",
      );
      setShowModal(false);
      return;
    }

    launchAlertModal("Something went wrong, please try again.");
    setShowModal(false);
  };

  const { write } = useCancelDeposit({
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
        header: "Cancel Deposit",
        loading,
        text: "Click below if you wish to cancel an existing deposit.",
      }}
    />
  );
};

export default CancelDepositModal;
