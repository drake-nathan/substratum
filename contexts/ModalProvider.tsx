import AlertModal from "components/Modals/AlertModal";
import SuccessModal from "components/Modals/SuccessModal";
import { createContext, useState } from "react";
import type { Hash } from "viem";

export interface IModalContext {
  launchAlertModal: (text: string) => void;
  launchSuccessModal: (text: string, hash: Hash) => void;
}

export const ModalContext = createContext<IModalContext>({
  launchAlertModal: () => {},
  launchSuccessModal: () => {},
});

interface Props {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: Props): JSX.Element => {
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
          setShowModal={setShowSuccessModal}
          text={successText}
          hash={hash}
        />
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
