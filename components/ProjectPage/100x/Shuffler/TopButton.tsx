import React, { useState } from "react";
import { isAddress } from "viem";
import { useAccount } from "wagmi";

import { useOneHundredXShuffleable } from "../../../../wagmi/generated";
import TopModal from "./TopModal";
import { type Method, methods } from "./methods";
import BigButton from "components/BigButton";
import { useMethodFees } from "hooks/100x/useMethodFees";
import { useModal } from "hooks/useModal";

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
  const { data: shuffleable } = useOneHundredXShuffleable();

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

    if (shuffleable === false) {
      launchAlertModal("Shuffling is not currently enabled.");
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
      <BigButton onClick={handleClick} style={{ gridArea: method }}>
        {method}
      </BigButton>

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
