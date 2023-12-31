import React from "react";
import type { SetState } from "utils/types";

import ActionArea from "./ActionArea";
import ModalBase from "./ModalBase";
import * as St from "./Modals.styled";

interface Props {
  onProceed: () => void;
  setShowModal: SetState<boolean>;
  transactionModalData: {
    error?: string;
    header: string;
    loading: boolean;
    subText: string;
    text: string;
  };
}

const TransactionModal = ({
  onProceed,
  setShowModal,
  transactionModalData: { error, header, loading, subText, text },
}: Props): React.JSX.Element => {
  const handleClick = () => {
    onProceed();
  };

  return (
    <ModalBase setShowModal={setShowModal}>
      <St.Header>{header}</St.Header>
      <St.Text>{text}</St.Text>
      <St.SubText>{subText}</St.SubText>
      <St.ButtonWrapper>
        <ActionArea error={error} handleClick={handleClick} loading={loading} />
      </St.ButtonWrapper>
    </ModalBase>
  );
};

export default TransactionModal;
