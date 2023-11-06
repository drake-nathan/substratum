import TransactionModal from "components/Modals/TransactionModal";
import { useShuffle } from "hooks/100x/useShuffle";
import { useTokensOwned } from "hooks/100x/useTokensOwned";
import { useModal } from "hooks/useModal";
import { useEffect, useState } from "react";
import type { SetState } from "utils/types";
import {
  type Address,
  formatEther,
  type Hash,
  TransactionExecutionError,
} from "viem";

import { type Method, methodDescriptions } from "./methods";

interface Props {
  address: Address;
  method: Method;
  methodFee: bigint;
  setShowModal: SetState<boolean>;
  vault: Address | undefined;
}

const ShuffleModal = ({
  address,
  method,
  methodFee,
  setShowModal,
  vault,
}: Props): JSX.Element => {
  const { launchAlertModal, launchSuccessModal } = useModal();
  const { tokensOwned, isSuccess } = useTokensOwned(address);

  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const fee = formatEther(methodFee);
  const subText = `This method will cost ${fee} ETH.`;

  const handleSuccess = (hash: Hash) => {
    setLoading(false);
    setShowModal(false);
    launchSuccessModal(
      `${method.toLocaleUpperCase()} shuffle successful!`,
      hash,
    );
  };

  const handleError = (error: Error) => {
    if (
      error instanceof TransactionExecutionError &&
      error.message.startsWith("User rejected the request.")
    ) {
      setShowModal(false);
    } else {
      if (vault) launchAlertModal("Vault/delegate may be invalid.");
      else launchAlertModal("Something went wrong, please try again.");
      setShowModal(false);
    }
  };

  const { write } = useShuffle({
    handleError,
    handleSuccess,
    method,
    payableAmount: methodFee,
    vault,
  });

  useEffect(() => {
    if (write) setLoading(false);
  }, [write]);

  useEffect(() => {
    if (isSuccess && !tokensOwned) {
      setError("Must own at least one token to shuffle.");
    }
  }, [fee, isSuccess, launchAlertModal, setShowModal, tokensOwned]);

  const proceedHandler = () => {
    setLoading(true);
    write?.();
  };

  return (
    <TransactionModal
      onProceed={proceedHandler}
      setShowModal={setShowModal}
      transactionModalData={{
        error,
        header: method,
        loading,
        subText,
        text: methodDescriptions[method],
      }}
    />
  );
};

export default ShuffleModal;
