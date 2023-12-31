import { useModal } from "hooks/useModal";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { useAccount } from "wagmi";

import ShuffleButton from "./ShuffleButton";
import * as St from "./Shuffler.styled";
import TokenOwnerOfModal from "./TokenOwnerOfModal";
import TopButton from "./TopButton";
import VaultInput from "./VaultInput";

const Shuffler = (): React.JSX.Element => {
  const { address } = useAccount();
  const { launchAlertModal } = useModal();

  const [vault, setVault] = useState<string>("");
  const [tokenModal, setTokenModal] = useState<boolean>(false);
  const [tokenId, setTokenId] = useState<string>();

  const handleViewClick = () => {
    if (!address) launchAlertModal("Please connect your wallet");
    else if (!tokenId) launchAlertModal("Please enter a token ID");
    else setTokenModal(true);
  };

  return (
    <St.ButtonGrid>
      <St.TopAction>
        <TopButton tokenId={tokenId} vault={vault} />

        <St.ViewLayer>
          <input
            aria-label="Token ID for Top method"
            className="flex-shrink flex-grow basis-full border-none bg-offset p-4 font-sans outline-none dark:text-black"
            max="100"
            onChange={(e) => setTokenId(e.target.value)}
            placeholder="Token ID to Top"
            step="1"
            type="number"
            value={tokenId}
          />

          <St.ViewButton id="view-token-owner" onClick={handleViewClick}>
            <St.EyeIcon />

            <Tooltip
              anchorId="view-token-owner"
              content="See tokens owned"
              place="left"
              positionStrategy="fixed"
            />
          </St.ViewButton>
        </St.ViewLayer>
      </St.TopAction>

      <ShuffleButton method="cut" vault={vault} />
      <ShuffleButton method="overhand" vault={vault} />
      <ShuffleButton method="faro" vault={vault} />
      <ShuffleButton method="wash" vault={vault} />
      <ShuffleButton method="reverse" vault={vault} />

      <VaultInput setVault={setVault} vault={vault} />

      {address && tokenModal && (
        <TokenOwnerOfModal
          address={address}
          setShowModal={setTokenModal}
          tokenId={tokenId}
        />
      )}
    </St.ButtonGrid>
  );
};

export default Shuffler;
