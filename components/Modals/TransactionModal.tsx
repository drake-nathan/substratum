import React from "react";

import type { SetState } from "utils/types";

import ActionArea from "./ActionArea";
import ModalBase from "./ModalBase";

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
  return (
    <ModalBase setShowModal={setShowModal}>
      <h3 className="font-semibold">{header}</h3>

      <p className="max-w-[30ch] text-center font-semibold">{text}</p>

      <p className="text-center text-hover-light dark:text-hover-dark">
        {subText}
      </p>

      <div className="flex items-center justify-around">
        <ActionArea error={error} handleClick={onProceed} loading={loading} />
      </div>
    </ModalBase>
  );
};

export default TransactionModal;
