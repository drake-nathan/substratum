import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { useTheme } from "styled-components";
import { useAccount } from "wagmi";

import type { SetState } from "utils/types";

import ShuffleButton from "./ShuffleButton";
import * as St from "./Shuffler.styled";
import TokenOwnerOfModal from "./TokenOwnerOfModal";
import TopButton from "./TopButton";
import VaultInput from "./VaultInput";
import { methodDescriptions } from "./methods";
import { useModal } from "hooks/useModal";

const Shuffler = ({
  setImageTokenId,
}: {
  setImageTokenId: SetState<number>;
}): React.JSX.Element => {
  const { isDark } = useTheme();
  const { address } = useAccount();
  const { launchAlertModal } = useModal();

  const [vault, setVault] = useState<string>("");
  const [tokenModal, setTokenModal] = useState<boolean>(false);
  const [tokenId, setTokenId] = useState<string>();

  const tooltipVariant = isDark ? "dark" : "light";
  const tooltipPlace = "bottom";

  const handleViewClick = () => {
    if (tokenId) {
      const tokenIdNumber = parseInt(tokenId);

      if (tokenIdNumber < 0 || tokenIdNumber > 100) {
        launchAlertModal("Token ID must be between 0 and 100");
        return;
      }

      setImageTokenId(parseInt(tokenId));
    }
  };

  return (
    <St.ButtonGrid>
      <St.TopAction>
        <a
          data-tooltip-content={methodDescriptions["top"]}
          data-tooltip-id="cut-tooltip"
          data-tooltip-place={tooltipPlace}
          data-tooltip-variant={tooltipVariant}
        >
          <TopButton tokenId={tokenId} vault={vault} />
        </a>
        <Tooltip className="max-w-[30ch]" id="top-tooltip" />

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
            <a
              className="self-center"
              data-tooltip-content="See this token's image"
              data-tooltip-id="view-token-image"
              data-tooltip-place="left"
            >
              <St.EyeIcon />
            </a>

            <Tooltip id="view-token-image" />
          </St.ViewButton>
        </St.ViewLayer>
      </St.TopAction>

      <a
        data-tooltip-content={methodDescriptions["cut"]}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="cut" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="cut-tooltip" />

      <a
        data-tooltip-content={methodDescriptions["overhand"]}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="overhand" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="overhand-tooltip" />

      <a
        data-tooltip-content={methodDescriptions["faro"]}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="faro" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="faro-tooltip" />

      <a
        data-tooltip-content={methodDescriptions["wash"]}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="wash" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="wash-tooltip" />

      <a
        data-tooltip-content={methodDescriptions["reverse"]}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
        style={{ gridArea: "reverse" }}
      >
        <ShuffleButton method="reverse" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="reverse-tooltip" />

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
