import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { z } from "zod";

import type { SetState } from "utils/types";

import { useModal } from "hooks/useModal";
import { zodAddress } from "utils/zod";

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
      <form
        className="flex flex-shrink flex-grow"
        onSubmit={void handleSubmit(onValid, onInvalid)}
        style={{ flexBasis: "100%", gridArea: "vault" }}
      >
        <input
          {...register("vault")}
          className="flex-shrink flex-grow basis-full border-none bg-offset p-4 font-sans outline-none dark:text-black"
          onChange={(e) => setVault(e.target.value)}
          placeholder="Optional: Enter Vault (Must Delegate to Connected Account)"
          type="text"
          value={vault}
        />

        <button
          className="flex h-full w-[50px] justify-center bg-icon-light hover:bg-icon-dark"
          type="submit"
        >
          <FaSearch className="self-center text-3xl text-icon-color" />
        </button>
      </form>
    </>
  );
};

export default VaultInput;
