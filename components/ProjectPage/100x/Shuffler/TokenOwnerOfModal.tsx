import AlertModal from "components/Modals/AlertModal";
import { useTokenOwnerOf } from "hooks/100x/useTokenOwnerOf";
import { shortenAddress } from "utils/shorteners";
import type { SetState } from "utils/types";
import type { Address } from "viem";

interface Props {
  address: Address;
  tokenId: string | undefined;
  setShowModal: SetState<boolean>;
}

const TokenOwnerOfModal = ({
  address,
  tokenId,
  setShowModal,
}: Props): JSX.Element => {
  const { ownerAddress, isError } = useTokenOwnerOf(Number(tokenId));

  const getText = () => {
    if (isError) return "Error fetching token owner.";
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
