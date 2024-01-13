import { useContext } from "react";

import { type IModalContext, ModalContext } from "contexts/ModalProvider";

export const useModal = (): IModalContext => {
  const { launchAlertModal, launchSuccessModal } = useContext(ModalContext);

  return {
    launchAlertModal,
    launchSuccessModal,
  };
};
