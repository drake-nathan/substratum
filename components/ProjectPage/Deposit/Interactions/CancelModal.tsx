import React, { useEffect, useState } from "react";
import {
  ContractFunctionExecutionError,
  type Hash,
  TransactionExecutionError,
} from "viem";
import { useWaitForTransactionReceipt } from "wagmi";

import type { SetState } from "utils/types";

import TransactionModal from "components/Modals/TransactionModal";
import { useCancelDeposit } from "hooks/deposit/useCancelDeposit";
import { useModal } from "hooks/useModal";

interface Props {
  setShowModal: SetState<boolean>;
}

const CancelDepositModal = ({ setShowModal }: Props): React.JSX.Element => {
  const { launchAlertModal, launchSuccessModal } = useModal();

  const [hash, setHash] = useState<Hash | undefined>();
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(false);

  const handleSuccess = (hash: Hash) => {
    setHash(hash);
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
    if (write && !firstLoad) {
      setLoading(false);
      setFirstLoad(true);
    }
  }, [firstLoad, write]);

  const proceedHandler = () => {
    setLoading(true);
    write?.();
  };

  const { data } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (data) {
      setLoading(false);
      setShowModal(false);
      launchSuccessModal(
        "Deposit successfully cancelled.",
        data.transactionHash,
      );
    }
  }, [data, setShowModal, launchSuccessModal]);

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
