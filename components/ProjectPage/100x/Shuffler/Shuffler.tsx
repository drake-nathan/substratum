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
          <St.Input
            aria-label="Token ID for Top method"
            onChange={(e) => setTokenId(e.target.value)}
            placeholder="Token ID to Top"
            type="number"
            max="100"
            step="1"
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

      <VaultInput vault={vault} setVault={setVault} />

      {address && tokenModal && (
        <TokenOwnerOfModal
          address={address}
          tokenId={tokenId}
          setShowModal={setTokenModal}
        />
      )}
    </St.ButtonGrid>
  );
};

export default Shuffler;
