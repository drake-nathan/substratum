import type { NextPage } from "next";

import Head from "next/head";

import CancelButton from "components/ProjectPage/Deposit/CancelButton";
import { useDepositBalance } from "hooks/deposit/useDepositBalance";
import { useDepositInitiative } from "hooks/deposit/useDepositInitiative";

const DepositTest: NextPage = () => {
  const depositInitiative = useDepositInitiative();
  const balance = useDepositBalance();

  console.log({ balance, depositInitiative });

  return (
    <div className="flex min-h-[75svh] w-full flex-col items-center px-4">
      <Head>
        <title>substratum | deposit testing</title>
        <meta content="Deposit Testing" name="description" />
      </Head>

      <div className="mt-12 w-96">
        <CancelButton />
        <p>Contract Balance: {balance ?? "..."}</p>
      </div>
    </div>
  );
};

export default DepositTest;
