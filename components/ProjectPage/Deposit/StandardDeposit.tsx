import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import DepositButton from "./Interactions/DepositButton";
import { useModal } from "hooks/useModal";
import { zodAddress } from "utils/zod";

const schema = z.object({
  recipient: zodAddress.or(z.literal("")),
});

const StandardDeposit = () => {
  const { launchAlertModal } = useModal();
  const { handleSubmit, register } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const [recipientAddress, setRecipientAddress] = useState("");

  const onValid = () => undefined;
  const onInvalid = () => launchAlertModal("Invalid Address");

  return (
    <div className="flex flex-col items-start justify-center gap-4 max-[650px]:items-center">
      <h2 className="mb-4 text-center text-3xl">Contract Interactions</h2>
      <h6 className="mb-4 font-bold">Standard Deposit</h6>
      <p>
        You can set an address to be the recipient of this project's token (0x
        form only - no ENS). If left blank, the depositing account will be set
        as recipient. Please consider using a vault that is delegated to a
        depositing account. The 100x10x1-A interactive functions support
        delegation through delegate.xyz.
      </p>

      <form
        className="mt-5 grid w-full min-w-[600px] grid-cols-[65%,35%] dark:border-3 dark:border-white max-[650px]:min-w-0 max-[650px]:max-w-[365px] max-[650px]:grid-cols-[70%,30%]"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <input
          {...register("recipient")}
          autoComplete="off"
          className="h-14 border-none bg-offset p-4 font-sans outline-none dark:text-black max-sm:text-[12px]"
          onChange={(e) => setRecipientAddress(e.target.value)}
          placeholder="Optional: 0x address recipient"
          value={recipientAddress}
        />

        <DepositButton recipientAddress={recipientAddress} />
      </form>
    </div>
  );
};

export default StandardDeposit;
