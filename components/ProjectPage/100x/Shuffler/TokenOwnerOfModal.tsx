import type { Address } from "viem";

import type { SetState } from "utils/types";

import AlertModal from "components/Modals/AlertModal";
import { useTokenOwnerOf } from "hooks/100x/useTokenOwnerOf";
import { shortenAddress } from "utils/shorteners";

interface Props {
  address: Address;
  setShowModal: SetState<boolean>;
  tokenId: string | undefined;
}

const TokenOwnerOfModal = ({
  address,
  setShowModal,
  tokenId,
}: Props): JSX.Element => {
  const { ownerAddress } = useTokenOwnerOf(Number(tokenId));

  const getText = () => {
    if (!ownerAddress) return "Loading token owner...";

    return `Token ${tokenId} is owned by ${shortenAddress(ownerAddress)}, ${
      ownerAddress.toLowerCase() === address.toLowerCase()
        ? "that's you!"
        : "that's not you!"
    }`;
  };

  return <AlertModal setShowModal={setShowModal} text={getText()} />;
};

export default TokenOwnerOfModal;
