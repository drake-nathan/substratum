import { type IModalContext, ModalContext } from "contexts/ModalProvider";
import { useContext } from "react";

export const useModal = (): IModalContext => {
  const { launchAlertModal, launchSuccessModal } = useContext(ModalContext);

  return {
    launchAlertModal,
    launchSuccessModal,
  };
};
