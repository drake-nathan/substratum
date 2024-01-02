import Button from "components/Button";
import type { SetState } from "utils/types";

import ModalBase from "./ModalBase";

interface Props {
  setShowModal: SetState<boolean>;
  text: string;
}

const AlertModal = ({ setShowModal, text }: Props): JSX.Element => {
  return (
    <ModalBase setShowModal={setShowModal}>
      <p className="max-w-[30ch] text-center font-semibold">{text}</p>

      <div className="flex items-center justify-around">
        <Button onClick={() => setShowModal(false)}>
          <h4>Close</h4>
        </Button>
      </div>
    </ModalBase>
  );
};

export default AlertModal;
