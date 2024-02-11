import { formatEther } from "viem";
import { useChainId } from "wagmi";

import { depositAddress } from "../../../wagmi/generated";
import * as St from "./DepositMain.styled";
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
      <St.NoteFromMattoContainer>
        <St.MattoNoteHeader>A Note From Matto</St.MattoNoteHeader>
        <St.NoteBox className="dark:border-3 dark:border-white">
          <St.NoteText>
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
          </St.NoteText>
        </St.NoteBox>
      </St.NoteFromMattoContainer>

      <St.MintStage>
        <St.StageStatus>
          <St.BoldText>STAGE:</St.BoldText>
          <St.NoteText>ALLOW LIST</St.NoteText>
          {isMintPrivate ?
            <St.CheckBox />
          : <St.BlankBox />}
          <St.NoteText>PUBLIC</St.NoteText>
          {isMintPublic ?
            <St.CheckBox />
          : <St.BlankBox />}
        </St.StageStatus>
        <St.DepositsStatus>
          <St.BoldText>DEPOSITS:</St.BoldText>
          {isDepositOpen ?
            <St.Unlocked />
          : <St.Locked />}
        </St.DepositsStatus>{" "}
      </St.MintStage>

      <St.BodyContainer>
        <St.Left>
          <St.HowSection>
            <h2>How The Contract Works</h2>
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
          </St.HowSection>

          <St.DiscountSection>
            <h2>Token-Gated Discount</h2>
            <St.DiscountGrid className="dark:border-3 dark:border-white">
              <p>
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
              <St.TokenThumb
                alt="Chainlife 17"
                className="dark:border-r-3 dark:border-white"
                src="/icons/chainlife_17.PNG"
              />
            </St.DiscountGrid>
          </St.DiscountSection>

          <St.ContractSection>
            <h2>Funding Status</h2>
            <St.ContractBody className="dark:border-3 dark:border-white">
              <h6 style={{ fontWeight: 700 }}>
                The following includes live data pulled from the{" "}
                <span style={{ textDecoration: "underline" }}>
                  <a
                    // @ts-expect-error not all chains exist
                    href={getEtherscanUrl({
                      chainId,
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
                  <p>
                    Goal Number of Depositors:{" "}
                    {depositInitiative.numberOfDepositsAllowed}{" "}
                  </p>
                  <p>
                    Current Depositors: {numOfDepositers} amazing supporters
                  </p>
                  <p>
                    Standard Deposit Amount:{" "}
                    {formatEther(depositInitiative.fullDeposit)} ETH{" "}
                  </p>
                  <p>
                    Discounted Deposit Amount:{" "}
                    {formatEther(depositInitiative.tokenGateDepositAmount)} ETH
                  </p>
                </>
              )}
            </St.ContractBody>
          </St.ContractSection>
        </St.Left>

        <St.Right>
          <StandardDeposit />

          <TokenGateDeposit />

          <St.CancelDeposit>
            <h6>Cancel Deposit</h6>
            <p>
              Plain and simple: cancel your deposit and you will be refunded
              your originally deposited amount (discounted or not).
            </p>
            <p style={{ fontStyle: "italic" }}>
              Note: this wipes all data associated with your deposit. Both
              depositing account and recipient account will be able to be
              reused.
            </p>
            <St.CancelButtonRow>
              <CancelButton />
            </St.CancelButtonRow>
          </St.CancelDeposit>
        </St.Right>
      </St.BodyContainer>
    </>
  );
};

export default DepositMain;
