import type { Hash } from "viem";

import React, { createContext, useState } from "react";

import AlertModal from "components/Modals/AlertModal";
import SuccessModal from "components/Modals/SuccessModal";

export interface IModalContext {
  launchAlertModal: (text: string) => void;
  launchSuccessModal: (text: string, hash: Hash) => void;
}

export const ModalContext = createContext<IModalContext>({
  launchAlertModal: () => undefined,
  launchSuccessModal: () => undefined,
});

const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertText, setAlertText] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [hash, setHash] = useState<Hash>();

  const launchAlertModal = (text: string) => {
    setAlertText(text);
    setShowAlertModal(true);
  };

  const launchSuccessModal = (text: string, hash: Hash) => {
    setSuccessText(text);
    setHash(hash);
    setShowSuccessModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        launchAlertModal,
        launchSuccessModal,
      }}
    >
      {children}

      {showAlertModal && (
        <AlertModal setShowModal={setShowAlertModal} text={alertText} />
      )}

      {hash && showSuccessModal && (
        <SuccessModal
          hash={hash}
          setShowModal={setShowSuccessModal}
          text={successText}
        />
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
