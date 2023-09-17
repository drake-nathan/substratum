import { ModalContext } from "contexts/ModalProvider";
import { useContext } from "react";

export const useModal = () => {
  const { launchAlertModal, launchTransactionModal, setTransactionModalData } =
    useContext(ModalContext);

  return {
    launchAlertModal,
    launchTransactionModal,
    setTransactionModalData,
  };
};
