import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "hooks/useModal";
import { useForm } from "react-hook-form";
import type { SetState } from "utils/types";
import { zodAddress } from "utils/zod";
import { z } from "zod";

import * as St from "./Shuffler.styled";

interface Props {
  vault: string;
  setVault: SetState<string>;
}

const schema = z.object({
  vault: zodAddress.nullable(),
});

const VaultInput = ({ vault, setVault }: Props): JSX.Element => {
  const { launchAlertModal } = useModal();
  const { register, handleSubmit } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onValid = () => launchAlertModal("Valid Address");
  const onInvalid = () => launchAlertModal("Invalid Address");

  return (
    <>
      <St.VaultForm
        onSubmit={handleSubmit(onValid, onInvalid)}
        style={{ gridArea: "vault" }}
      >
        <St.Input
          {...register("vault")}
          onChange={(e) => setVault(e.target.value)}
          placeholder="Optional: Enter Vault (Must Delegate to Connected Account)"
          type="text"
          value={vault}
        />
        <St.ViewButton type="submit">
          <St.SearchIcon />
        </St.ViewButton>
      </St.VaultForm>
    </>
  );
};

export default VaultInput;
