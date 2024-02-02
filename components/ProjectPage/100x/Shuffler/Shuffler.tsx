import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useTheme } from "styled-components";
import { useAccount } from "wagmi";

import type { SetState } from "utils/types";

import ShuffleButton from "./ShuffleButton";
import TokenOwnerOfModal from "./TokenOwnerOfModal";
import TopButton from "./TopButton";
import VaultInput from "./VaultInput";
import { methodDescriptions } from "./methods";
import st from "./shuffler.module.css";
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

  const classes = `${st.shufflerGrid} mt-4 grid grid-cols-2 gap-x-4 gap-y-5`;

  return (
    <div className={classes}>
      <div className="flex flex-col" style={{ gridArea: "top" }}>
        <a
          data-tooltip-content={methodDescriptions.top}
          data-tooltip-id="cut-tooltip"
          data-tooltip-place={tooltipPlace}
          data-tooltip-variant={tooltipVariant}
        >
          <TopButton tokenId={tokenId} vault={vault} />
        </a>
        <Tooltip className="max-w-[30ch]" id="top-tooltip" />

        <div className="flex shrink grow" style={{ flexBasis: "100%" }}>
          <input
            aria-label="Token ID for Top method"
            className="shrink grow basis-full border-none bg-offset p-4 font-sans outline-none dark:text-black"
            max="100"
            onChange={(e) => setTokenId(e.target.value)}
            placeholder="Token ID to Top"
            step="1"
            type="number"
            value={tokenId}
          />

          <button
            className="flex h-full w-[50px] justify-center bg-icon-light hover:bg-icon-dark"
            id="view-token-owner"
            onClick={handleViewClick}
          >
            <a
              className="self-center"
              data-tooltip-content="See this token's image"
              data-tooltip-id="view-token-image"
              data-tooltip-place="left"
            >
              <FaEye className="text-3xl text-icon-color" />
            </a>

            <Tooltip id="view-token-image" />
          </button>
        </div>
      </div>

      <a
        data-tooltip-content={methodDescriptions.cut}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="cut" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="cut-tooltip" />

      <a
        data-tooltip-content={methodDescriptions.overhand}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="overhand" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="overhand-tooltip" />

      <a
        data-tooltip-content={methodDescriptions.faro}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="faro" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="faro-tooltip" />

      <a
        data-tooltip-content={methodDescriptions.wash}
        data-tooltip-id="cut-tooltip"
        data-tooltip-place={tooltipPlace}
        data-tooltip-variant={tooltipVariant}
      >
        <ShuffleButton method="wash" vault={vault} />
      </a>
      <Tooltip className="max-w-[30ch]" id="wash-tooltip" />

      <a
        data-tooltip-content={methodDescriptions.reverse}
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
    </div>
  );
};

export default Shuffler;
