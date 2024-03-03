import React, { useEffect, useState } from "react";
import {
  type Address,
  type Hash,
  TransactionExecutionError,
  formatEther,
} from "viem";
import { useWaitForTransactionReceipt } from "wagmi";

import type { SetState } from "utils/types";

import { type Method, methodDescriptions } from "./methods";
import TransactionModal from "components/Modals/TransactionModal";
import { useShuffle } from "hooks/100x/useShuffle";
import { useTokensOwned } from "hooks/100x/useTokensOwned";
import { useModal } from "hooks/useModal";

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
}: Props): React.JSX.Element => {
  const { launchAlertModal, launchSuccessModal } = useModal();
  const { isSuccess, tokensOwned } = useTokensOwned(address, vault);

  const [hash, setHash] = useState<Hash | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(false);

  const fee = formatEther(methodFee);
  const subText = `This method will cost ${fee} ETH.`;

  const handleSuccess = (hash: Hash) => {
    setHash(hash);
  };

  const handleError = (error: Error) => {
    // This error is handled in the transaction modal
    if (isSuccess && !tokensOwned) return;

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
    if (write && !firstLoad) {
      setLoading(false);
      setFirstLoad(true);
    }
  }, [firstLoad, write]);

  useEffect(() => {
    if (isSuccess && !tokensOwned) {
      setError("Must own at least one token to shuffle.");
    }
  }, [isSuccess, tokensOwned]);

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
        `${method.toLocaleUpperCase()} shuffle successful! Check back in about 15 minutes for the updated composite image.`,
        data.transactionHash,
      );
    }
  }, [data, setShowModal, launchSuccessModal, method]);

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
