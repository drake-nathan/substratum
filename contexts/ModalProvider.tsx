import AlertModal from "components/Modals/AlertModal";
import TransactionModal from "components/Modals/TransactionModal";
import { createContext, useState } from "react";
import type { SetState } from "utils/types";

interface IModalContext {
  launchAlertModal: (text: string) => void;
  launchTransactionModal: (
    header: string,
    text: string,
    subText: string,
  ) => void;
  setTransactionModalData: SetState<{
    loading: boolean;
    header: string;
    text: string;
    subText: string;
  }>;
}

export const ModalContext = createContext<IModalContext>({
  launchAlertModal: () => {},
  launchTransactionModal: () => {},
  setTransactionModalData: () => {},
});

interface Props {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: Props): JSX.Element => {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertText, setAlertText] = useState("");

  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [transactionModalData, setTransactionModalData] = useState({
    loading: false,
    header: "",
    text: "",
    subText: "",
  });

  const launchAlertModal = (text: string) => {
    setAlertText(text);
    setShowTransactionModal(false);
    setShowAlertModal(true);
  };

  const launchTransactionModal = (
    header: string,
    text: string,
    subText: string,
  ) => {
    setTransactionModalData({
      loading: true,
      header,
      text,
      subText,
    });
    setShowTransactionModal(true);

    // setTimeout(() => {
    //   setTransactionModalData((prev) => ({ ...prev, loading: false }));
    //   launchAlertModal("Transaction timed out. :-(");
    // }, 10000);
  };

  return (
    <ModalContext.Provider
      value={{
        launchAlertModal,
        launchTransactionModal,
        setTransactionModalData,
      }}
    >
      {children}

      {showAlertModal && (
        <AlertModal setShowModal={setShowAlertModal} text={alertText} />
      )}

      {showTransactionModal && (
        <TransactionModal
          setShowModal={setShowTransactionModal}
          transactionModalData={transactionModalData}
        />
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
