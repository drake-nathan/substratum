import { useModal } from "hooks/useModal";
import { isAddress } from "utils/helpers";
import type { SetState } from "utils/types";

import * as St from "./Shuffler.styled";

interface Props {
  vault: string | undefined;
  setVault: SetState<string | undefined>;
}

const VaultInput = ({ vault, setVault }: Props): JSX.Element => {
  const { launchAlertModal } = useModal();

  const clickHandler = () => {
    const valid = isAddress(vault);

    if (!valid) {
      launchAlertModal("Invalid Address");
    } else {
      launchAlertModal("Valid Address");
    }
  };

  return (
    <St.ViewLayer>
      <St.Input
        onChange={(e) => setVault(e.target.value)}
        placeholder="Optional: Enter Vault (Must Delegate to Connected Account)"
        type="text"
        value={vault}
      />

      <St.ViewButton onClick={clickHandler}>
        <St.SearchIcon />
      </St.ViewButton>
    </St.ViewLayer>
  );
};

export default VaultInput;
