import type { SetState } from "utils/types";

import * as St from "./Modals.styled";

interface Props {
  setShowModal: SetState<boolean>;
  children: React.ReactNode;
}

const ModalBase = ({ setShowModal, children }: Props): JSX.Element => {
  return (
    <>
      <St.Overlay onClick={() => setShowModal(false)} />
      <St.Container>{children}</St.Container>
    </>
  );
};

export default ModalBase;
