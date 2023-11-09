import type { SetState } from "utils/types";

import ModalBase from "./ModalBase";
import * as St from "./Modals.styled";

interface Props {
  setShowModal: SetState<boolean>;
  text: string;
}

const AlertModal = ({ setShowModal, text }: Props): JSX.Element => {
  return (
    <ModalBase setShowModal={setShowModal}>
      <St.Text>{text}</St.Text>

      <St.ButtonWrapper>
        <St.Button onClick={() => setShowModal(false)}>
          <h4>Close</h4>
        </St.Button>
      </St.ButtonWrapper>
    </ModalBase>
  );
};

export default AlertModal;
