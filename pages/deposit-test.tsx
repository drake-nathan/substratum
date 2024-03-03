import type { NextPage } from "next";

import Head from "next/head";
import { formatEther } from "viem";

import CancelButton from "components/ProjectPage/Deposit/Interactions/CancelButton";
import { useCurrentDepositers } from "hooks/deposit/useCurrentDepositers";
import { useDepositBalance } from "hooks/deposit/useDepositBalance";
import { useDepositInitiative } from "hooks/deposit/useDepositInitiative";

const DepositTest: NextPage = () => {
  const depositInitiative = useDepositInitiative();
  const balance = useDepositBalance();
  const numOfDepositers = useCurrentDepositers();

  return (
    <div className="flex min-h-[75svh] w-full flex-col items-center px-4">
      <Head>
        <title>substratum | deposit testing</title>
        <meta content="Deposit Testing" name="description" />
      </Head>

      <div className="mt-12 w-96">
        <CancelButton />
        <p>Contract Balance: {balance ?? "..."}</p>
        {depositInitiative && (
          <>
            <p>Initiative Name: {depositInitiative.name}</p>
            <p>
              Deposit Amount: {formatEther(depositInitiative.fullDeposit)} ETH
            </p>
            <p>
              Token Gated Deposit Amount:{" "}
              {formatEther(depositInitiative.tokenGateDepositAmount)} ETH
            </p>
            <p>
              Goal of Depositers: {depositInitiative.numberOfDepositsAllowed}
            </p>
          </>
        )}
        <p>Current Number of Depositers: {numOfDepositers}</p>
      </div>
    </div>
  );
};

export default DepositTest;
