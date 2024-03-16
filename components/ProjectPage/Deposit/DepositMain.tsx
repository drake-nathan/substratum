import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { formatEther } from "viem";
import { useChainId } from "wagmi";

import { depositAddress } from "../../../wagmi/generated";
import CancelButton from "./Interactions/CancelButton";
import StandardDeposit from "./StandardDeposit";
import TokenGateDeposit from "./TokenGateDeposit";
import { useCurrentDepositers } from "hooks/deposit/useCurrentDepositers";
import { useDepositInitiative } from "hooks/deposit/useDepositInitiative";
import { useDepositStatus } from "hooks/deposit/useDepositStatus";
import { getEtherscanUrl } from "utils/helpers";

const DepositMain = (): React.JSX.Element => {
  const chainId = useChainId();
  const depositInitiative = useDepositInitiative();
  const numOfDepositers = useCurrentDepositers();
  const { isDepositOpen, isMintPrivate, isMintPublic } = useDepositStatus();

  const apos = "'";

  return (
    <>
      <div
        className="mt-8 flex flex-col items-center justify-start gap-4 md:mt-5"
        id="note-from-matto-container"
      >
        <h1 className="max-md:text-3xl">A Note From Matto</h1>
        <div
          className="w-3/4 border-3 border-black px-10 py-4 dark:border-white max-md:w-5/6"
          id="note-container"
        >
          <p className="text-center max-md:text-base">
            100x10x1 Composition A is unique in that full functionality of the
            project only happens
            <span className="text-base font-bold"> after a full mint</span> of
            its 100 tokens. Also, there is a{" "}
            <span className="text-base italic">
              benefit to all participants{" "}
            </span>
            if they are {apos}individual{apos} and able to communicate with each
            other. Based on these aspects and my general disdain for{" "}
            <span className="text-base italic">FOMO</span>, I wrote this
            reusable contract that allows allow lists, token-gated discounts,
            and for participants to cancel their bid at any time up to{" "}
            <span className="text-base italic">raise-closing*</span> .
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8" id="mint-stage-container">
        <div className="flex items-center gap-2" id="stage-status-container">
          <p className="text-center font-extrabold max-md:text-base">STAGE:</p>
          <p className="text-center max-md:text-base">ALLOW LIST</p>
          {isMintPrivate ?
            <MdOutlineCheckBox className="mr-2 text-xl" />
          : <MdOutlineCheckBoxOutlineBlank className="text-xl" />}
          <p className="text-center max-md:text-base">PUBLIC</p>
          {isMintPublic ?
            <MdOutlineCheckBox className="mr-2 text-xl" />
          : <MdOutlineCheckBoxOutlineBlank className="text-xl" />}
        </div>
        <div
          className="flex h-[90px] items-center gap-4"
          id="deposit-status-container"
        >
          <p className="text-center font-extrabold max-md:text-base">
            DEPOSITS:
          </p>
          {isDepositOpen ?
            <IoLockOpen className="text-xl" />
          : <IoLockClosed className="-ml-2 -mt-1 text-xl" />}
        </div>{" "}
      </div>

      <div
        className="grid w-full max-w-[2000px] grid-cols-2 max-xl:flex max-xl:max-w-[1000px] max-xl:flex-col max-xl:items-center max-xl:justify-center max-xl:gap-8 max-xl:p-10"
        id="deposit-body-container"
      >
        <div
          className="grid grid-rows-3 gap-12 px-16 max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center max-md:px-1 max-sm:w-full"
          id="deposit-left-container"
        >
          <div className="flex flex-col items-center justify-start gap-4">
            <h2 className="mb-4 text-3xl">How The Contract Works</h2>
            <p>
              This deposit contract allows only{" "}
              <span className="text-base font-bold">
                {" "}
                1 deposit per account
              </span>
              , only
              <span className="text-base font-bold">
                {" "}
                1 mint per receiving account
              </span>
              , and it{" "}
              <span className="text-base font-bold">
                {" "}
                allows the artist to cancel (and refund) any deposits
              </span>
              . If a mint is assigned to an account that the artist doesn{apos}t
              think will be a good participant in this project, the artist can
              cancel the corresponding deposit.{" "}
            </p>
            <p>
              This is an <span className="text-base italic">experimental </span>
              project and funding mechanism. After raise-close, depositors will
              have a{" "}
              <span style={{ fontSize: "16px", textDecoration: "underline" }}>
                100x10x1-A token
              </span>{" "}
              airdropped to their specified {apos}recipient{apos} address (or in
              case of emergency, they will receive a full refund).
            </p>{" "}
            <p>
              {" "}
              *Raise-closing: automatic once the goal number of depositors is
              reached, but if unreached the artist may manually close it.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h2 className="mb-4 text-3xl">Token-Gated Discount</h2>

            <div className="grid min-w-0 max-w-full grid-cols-[5fr_1fr] border-3 border-black dark:border-white sm:min-w-[500px] sm:max-w-[650px] sm:grid-cols-[2fr_1fr]">
              <p className="p-5 text-base md:text-lg 2xl:p-2.5">
                To be eligible for a discount the depositing account or a vault
                that delegates to it must own a{" "}
                <a
                  className="cursor-pointer text-base underline hover:text-hover-light dark:hover:text-hover-dark"
                  href="https://www.chainlife.xyz/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Chainlife token.
                </a>{" "}
                The address that holds the qualifying token will be recorded as
                the recipient of the 100x10x1-A token.
              </p>

              <img
                alt="Chainlife 17"
                className="border-l-3 border-black object-cover dark:border-r-3 dark:border-white max-sm:border-b-3"
                src="/icons/chainlife_17.PNG"
              />
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start gap-4"
            id="deposit-contract-section"
          >
            <h2 className="mb-4 text-3xl">Funding Status</h2>

            <div
              className="flex min-w-[500px] flex-col gap-2 border-3 border-black p-9 dark:border-white max-sm:min-w-0 max-sm:max-w-full"
              id="deposit-contract-body"
            >
              <h6 className="font-bold">
                The following includes live data pulled from the{" "}
                <span style={{ textDecoration: "underline" }}>
                  <a
                    href={getEtherscanUrl({
                      chainId,
                      // @ts-expect-error - Not all chains exist
                      value: depositAddress[chainId],
                    })}
                    target="_blank"
                  >
                    contract
                  </a>
                </span>
                :
              </h6>

              {depositInitiative && (
                <>
                  <p className="max-2xl:text-lg">
                    Goal Number of Depositors:{" "}
                    {depositInitiative.numberOfDepositsAllowed}{" "}
                  </p>
                  <p className="max-2xl:text-lg">
                    Current Depositors: {numOfDepositers} amazing supporters
                  </p>
                  <p className="max-2xl:text-lg">
                    Standard Deposit Amount:{" "}
                    {formatEther(depositInitiative.fullDeposit)} ETH{" "}
                  </p>
                  <p className="max-2xl:text-lg">
                    Discounted Deposit Amount:{" "}
                    {formatEther(depositInitiative.tokenGateDepositAmount)} ETH
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="grid grid-rows-3 gap-12 px-1 max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center max-sm:w-full md:px-16"
          id="deposit-right-container"
        >
          <StandardDeposit />

          <TokenGateDeposit />

          <div
            className="flex flex-col items-start gap-4 max-sm:items-center"
            id="deposit-cancel"
          >
            <h6 className="mb-4 font-bold">Cancel Deposit</h6>

            <p>
              Plain and simple: cancel your deposit and you will be refunded
              your originally deposited amount (discounted or not).
            </p>

            <p style={{ fontStyle: "italic" }}>
              Note: this wipes all data associated with your deposit. Both
              depositing account and recipient account will be able to be
              reused.
            </p>

            <div className="flex w-full items-center justify-center">
              <CancelButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositMain;
