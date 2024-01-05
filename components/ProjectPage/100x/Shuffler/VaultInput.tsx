import type { SetState } from "utils/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "hooks/useModal";
import { useForm } from "react-hook-form";
import { zodAddress } from "utils/zod";
import { z } from "zod";

import * as St from "./Shuffler.styled";

interface Props {
  setVault: SetState<string>;
  vault: string;
}

const schema = z.object({
  vault: zodAddress.nullable(),
});

const VaultInput = ({ setVault, vault }: Props): JSX.Element => {
  const { launchAlertModal } = useModal();
  const { handleSubmit, register } = useForm({
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
        <input
          {...register("vault")}
          className="flex-shrink flex-grow basis-full border-none bg-offset p-4 font-sans outline-none dark:text-black"
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
