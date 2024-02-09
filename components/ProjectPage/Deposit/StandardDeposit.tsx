import React, { useState } from "react";

import * as St from "./DepositMain.styled";
import DepositButton from "./Interactions/DepositButton";

const StandardDeposit = () => {
  const [recipientAddress, setRecipientAddress] = useState("");

  return (
    <St.StandardDeposit>
      <h2>Contract Interactions</h2>
      <h6>Standard Deposit</h6>
      <p>
        You can set an address to be the recipient of this project's token (0x
        form only - no ENS). If left blank, the depositing account will be set
        as recipient. Please consider using a vault that is delegated to a
        depositing account. The 100x10x1-A interactive functions support
        delegation through delegate.xyz.
      </p>
      <St.ButtonRow className="dark:border-3 dark:border-white">
        <St.UserInput
          className="border-none bg-offset p-4 font-sans outline-none dark:text-black max-sm:text-[12px]"
          onChange={(e) => setRecipientAddress(e.target.value)}
          placeholder="Optional: 0x address recipient"
          value={recipientAddress}
        />
        <DepositButton recipientAddress={recipientAddress} />
      </St.ButtonRow>
    </St.StandardDeposit>
  );
};

export default StandardDeposit;
