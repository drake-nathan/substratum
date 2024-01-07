import type { SetState } from "utils/types";
import type { Hash } from "viem";

import Button from "components/Button";
import { getEtherscanLink } from "utils/links";
import { useChainId } from "wagmi";

import ModalBase from "./ModalBase";

interface Props {
  hash: Hash;
  setShowModal: SetState<boolean>;
  text: string;
}

const SuccessModal = ({ hash, setShowModal, text }: Props): JSX.Element => {
  const chainId = useChainId();
  const chain = chainId === 1 ? "mainnet" : "goerli";

  const link = getEtherscanLink({ chain, type: "tx", value: hash });

  return (
    <ModalBase setShowModal={setShowModal}>
      <p className="max-w-[30ch] text-center font-semibold">{text}</p>

      <a
        className="text-[1.125rem] font-medium hover:text-hover-light hover:underline dark:hover:text-hover-dark"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        View on Etherscan
      </a>

      <div className="flex items-center justify-around">
        <Button onClick={() => setShowModal(false)}>
          <h4>Close</h4>
        </Button>
      </div>
    </ModalBase>
  );
};

export default SuccessModal;
