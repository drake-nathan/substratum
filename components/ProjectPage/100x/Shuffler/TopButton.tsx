import { useMethodFees } from "hooks/100x/useMethodFees";
import { useModal } from "hooks/useModal";
import React, { useState } from "react";
import { isAddress } from "viem";
import { useAccount } from "wagmi";

import { type Method, methods } from "./methods";
import * as St from "./Shuffler.styled";
import TopModal from "./TopModal";

interface Props {
  tokenId: string | undefined;
  vault: string;
}

const TopButton = ({ tokenId, vault }: Props): React.JSX.Element => {
  const method: Method = "top";
  const methodId = methods[method];

  const { launchAlertModal } = useModal();
  const { address } = useAccount();
  const { methodFees } = useMethodFees();

  const [showTopModal, setShowTopModal] = useState<boolean>(false);

  const handleClick = () => {
    if (!address) {
      launchAlertModal("Please connect your wallet");
      return;
    }

    if (!methodFees) {
      launchAlertModal(
        "We're having trouble getting data from the blockchain at the moment. Please try again later or with a better connection.",
      );
      return;
    }

    const isTokenIdValid =
      tokenId &&
      !isNaN(Number(tokenId)) &&
      Number(tokenId) > 0 &&
      Number(tokenId) <= 100;

    if (!isTokenIdValid) {
      launchAlertModal("Please enter a token ID between 0 and 100.");
      return;
    }

    if (vault && !isAddress(vault)) {
      launchAlertModal("Please enter a valid vault address");
      return;
    }

    setShowTopModal(true);
  };

  return (
    <>
      <St.ActionButton style={{ gridArea: method }} onClick={handleClick}>
        {method}
      </St.ActionButton>

      {address &&
        methodFees &&
        showTopModal &&
        tokenId &&
        (vault === "" || isAddress(vault)) && (
          <TopModal
            address={address}
            methodFee={methodFees[methodId]}
            setShowModal={setShowTopModal}
            tokenId={Number(tokenId)}
            vault={vault || undefined}
          />
        )}
    </>
  );
};

export default TopButton;
