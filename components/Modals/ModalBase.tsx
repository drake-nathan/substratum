import type { SetState } from "utils/types";

import * as St from "./Modals.styled";

interface Props {
  children: React.ReactNode;
  setShowModal: SetState<boolean>;
}

const ModalBase = ({ children, setShowModal }: Props): JSX.Element => {
  return (
    <>
      <St.Overlay onClick={() => setShowModal(false)} />
      <St.Container>{children}</St.Container>
    </>
  );
};

export default ModalBase;
