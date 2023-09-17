import { PuffLoader } from "react-spinners";
import { useTheme } from "styled-components";
import type { SetState } from "utils/types";

import ModalBase from "./ModalBase";
import * as St from "./Modals.styled";

interface Props {
  setShowModal: SetState<boolean>;
  transactionModalData: {
    loading: boolean;
    header: string;
    text: string;
    subText: string;
  };
}

const TransactionModal = ({
  setShowModal,
  transactionModalData,
}: Props): JSX.Element => {
  const { loading, header, text, subText } = transactionModalData;

  const { colors } = useTheme();

  return (
    <ModalBase setShowModal={setShowModal}>
      <St.Header>{header}</St.Header>
      <St.Text>{text}</St.Text>
      <St.SubText>{subText}</St.SubText>
      <St.ButtonWrapper>
        {loading ? (
          <PuffLoader color={colors.textMain} />
        ) : (
          <St.Button onClick={() => setShowModal(false)}>
            <h4>Proceed</h4>
          </St.Button>
        )}
      </St.ButtonWrapper>
    </ModalBase>
  );
};

export default TransactionModal;
