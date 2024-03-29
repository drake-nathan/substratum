import { useEffect, useState } from "react";
import {
  type Address,
  type Hash,
  TransactionExecutionError,
  formatEther,
  isAddressEqual,
} from "viem";
import { useWaitForTransactionReceipt } from "wagmi";

import type { SetState } from "utils/types";

import { methodDescriptions } from "./methods";
import TransactionModal from "components/Modals/TransactionModal";
import { useTokenOwnerOf } from "hooks/100x/useTokenOwnerOf";
import { useTop } from "hooks/100x/useTop";
import { useModal } from "hooks/useModal";

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

  const isTokenOwner =
    ownerAddress ? isAddressEqual(vault ?? address, ownerAddress) : null;

  const [hash, setHash] = useState<Hash | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [firstLoad, setFirstLoad] = useState(false);

  const fee = formatEther(methodFee);
  const subText = `This method will cost ${fee} ETH.`;

  const handleSuccess = (hash: Hash) => {
    setHash(hash);
  };

  const handleError = (error: Error) => {
    // This error is handled in the transaction modal
    if (isSuccess && !isTokenOwner) return;

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
    if (write && !firstLoad) {
      setLoading(false);
      setFirstLoad(true);
    }
  }, [firstLoad, write]);

  useEffect(() => {
    if (isSuccess && !isTokenOwner) {
      setError(`Must own token #${tokenId}.`);
    }
  }, [fee, isSuccess, isTokenOwner, launchAlertModal, setShowModal, tokenId]);

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
        `Token ${tokenId} has been sent to the top! Check back in about 15 minutes for the updated composite image.`,
        data.transactionHash,
      );
    }
  }, [data, setShowModal, launchSuccessModal, tokenId]);

  return (
    <TransactionModal
      onProceed={proceedHandler}
      setShowModal={setShowModal}
      transactionModalData={{
        error,
        header: "Top",
        loading,
        subText,
        text: methodDescriptions.top,
      }}
    />
  );
};

export default TopModal;
