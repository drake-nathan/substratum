import React, { useEffect, useState } from "react";
import { type Hash, TransactionExecutionError } from "viem";
import { useWaitForTransactionReceipt } from "wagmi";

import type { SetState } from "utils/types";

import TransactionModal from "components/Modals/TransactionModal";
import { useDepositAndSetRecipent } from "hooks/deposit/useDepositAndSetRecipent";
import { useModal } from "hooks/useModal";

interface Props {
  setShowModal: SetState<boolean>;
}

const DepositRecipentModal = ({ setShowModal }: Props): React.JSX.Element => {
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

    launchAlertModal("Something went wrong, please try again.");
    setShowModal(false);
  };

  const { write } = useDepositAndSetRecipent({
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
      launchSuccessModal("Deposit successfully made.", data.transactionHash);
    }
  }, [data, setShowModal, launchSuccessModal]);

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
