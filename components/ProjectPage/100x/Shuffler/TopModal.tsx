import TransactionModal from "components/Modals/TransactionModal";
import { useTokenOwnerOf } from "hooks/100x/useTokenOwnerOf";
import { useTop } from "hooks/100x/useTop";
import { useModal } from "hooks/useModal";
import { useEffect, useState } from "react";
import type { SetState } from "utils/types";
import {
  type Address,
  formatEther,
  type Hash,
  isAddressEqual,
  TransactionExecutionError,
} from "viem";

import { methodDescriptions } from "./methods";

interface Props {
  address: Address;
  methodFee: bigint;
  setShowModal: SetState<boolean>;
  tokenId: number;
  vault: Address | undefined;
}

const TopModal = ({
  address,
  methodFee,
  setShowModal,
  tokenId,
  vault,
}: Props): JSX.Element => {
  const { launchAlertModal, launchSuccessModal } = useModal();
  const { isSuccess, ownerAddress } = useTokenOwnerOf(tokenId);

  const isTokenOwner = ownerAddress
    ? isAddressEqual(vault ?? address, ownerAddress)
    : null;

  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const fee = formatEther(methodFee);
  const subText = `This method will cost ${fee} ETH.`;

  const handleSuccess = (hash: Hash) => {
    setLoading(false);
    setShowModal(false);
    launchSuccessModal(`Token ${tokenId} has been sent to the top!`, hash);
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

  const { write } = useTop({
    handleError,
    handleSuccess,
    payableAmount: methodFee,
    tokenId,
    vault,
  });

  useEffect(() => {
    if (write) setLoading(false);
  }, [write]);

  useEffect(() => {
    if (isSuccess && !isTokenOwner) {
      setError(`Must own token #${tokenId}.`);
    }
  }, [fee, isSuccess, isTokenOwner, launchAlertModal, setShowModal, tokenId]);

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
        header: "Top",
        loading,
        subText,
        text: methodDescriptions["top"],
      }}
    />
  );
};

export default TopModal;
