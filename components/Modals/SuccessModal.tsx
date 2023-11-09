import { getEtherscanLink } from "utils/links";
import type { SetState } from "utils/types";
import type { Hash } from "viem";
import { useChainId } from "wagmi";

import ModalBase from "./ModalBase";
import * as St from "./Modals.styled";

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
      <St.Text>{text}</St.Text>

      <St.Link href={link} target="_blank" rel="noreferrer">
        View on Etherscan
      </St.Link>

      <St.ButtonWrapper>
        <St.Button onClick={() => setShowModal(false)}>
          <h4>Close</h4>
        </St.Button>
      </St.ButtonWrapper>
    </ModalBase>
  );
};

export default SuccessModal;
