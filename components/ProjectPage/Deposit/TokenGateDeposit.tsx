import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import TokenGateButton from "./Interactions/TokenGateButton";
import { useModal } from "hooks/useModal";
import { zodJsonToNumber } from "utils/zod";

const schema = z.object({
  tokenId: zodJsonToNumber.or(z.literal("")),
});

const TokenGateDeposit = (): React.JSX.Element => {
  const { launchAlertModal } = useModal();
  const { handleSubmit, register } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const [tokenId, setTokenId] = useState("");

  const onValid = () => undefined;
  const onInvalid = () => launchAlertModal("Invalid Token Id");

  return (
    <div className="flex flex-col items-start justify-center gap-4 max-[650px]:items-center">
      <h6 className="mb-4 font-bold">Token-Gated Deposit</h6>
      <p>
        To receive the discount, enter the eligible token's ID. This token must
        be owned by the depositing account or a vault that delegates to it. The
        recipient account will be set to whichever account owns the eligible
        token.
      </p>

      <form
        className="mt-5 grid w-full min-w-[600px] grid-cols-[65%,35%] dark:border-3 dark:border-white max-[650px]:min-w-0 max-[650px]:max-w-[365px] max-[650px]:grid-cols-[70%,30%]"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <input
          {...register("tokenId")}
          className="h-14 border-none bg-offset p-4 font-sans outline-none dark:text-black max-sm:text-[12px]"
          onChange={(e) => setTokenId(e.target.value)}
          placeholder="Chainlife token ID required"
          type="text"
          value={tokenId}
        />

        <TokenGateButton tokenId={tokenId} />
      </form>
    </div>
  );
};

export default TokenGateDeposit;
