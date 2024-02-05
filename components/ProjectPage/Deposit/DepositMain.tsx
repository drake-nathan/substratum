import { useState } from "react";

import * as St from "./DepositMain.styled";

const DepositMain = (): React.JSX.Element => {
  const [isDepositOpen] = useState(true);

  const [isMintPublic] = useState(false);

  const [isMintPrivate] = useState(true);

  const apos = "'";

  return (
    <>
      <St.NoteFromMattoContainer>
        <St.MattoNoteHeader>A Note From Matto</St.MattoNoteHeader>
        <St.NoteBox className="dark:border-3 dark:border-white">
          <St.NoteText>
            100x10x1 Composition A is unique in that full functionality of the
            project only happens
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              {" "}
              after a full mint
            </span>{" "}
            of its 100 tokens. Also, there is a{" "}
            <span style={{ fontSize: "16px", fontStyle: "italic" }}>
              benefit to all participants{" "}
            </span>
            if they are {apos}individual{apos} and able to communicate with each
            other. Based on these aspects and my general disdain for{" "}
            <span style={{ fontSize: "16px", fontStyle: "italic" }}>FOMO </span>
            , I wrote this reusable contract that allows allow lists,
            token-gated discounts, and for participants to cancel their bid at
            any time up to{" "}
            <span style={{ fontSize: "16px", textDecoration: "underline" }}>
              raise-closing*
            </span>{" "}
            .
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
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                {" "}
                1 deposit per account{" "}
              </span>
              , only
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                {" "}
                1 mint per receiving account
              </span>
              , and it{" "}
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                {" "}
                allows the artist to cancel (and refund) any deposits{" "}
              </span>
              . If a mint is assigned to an account that the artist doesn{apos}t
              think will be a good participant in this project, the artist can
              cancel the corresponding deposit.{" "}
            </p>
            <p>
              This is an{" "}
              <span style={{ fontSize: "16px", fontStyle: "italic" }}>
                experimental{" "}
              </span>
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
                <span style={{ fontSize: "16px", textDecoration: "underline" }}>
                  Chainlife token
                </span>{" "}
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
                    href="https://goerli.etherscan.io/address/0xCC55af23d9861e41C5875F1e76fb3c4122E8C4Fa"
                    target="_blank"
                  >
                    contract
                  </a>
                </span>
                :
              </h6>
              <p>Goal Number of Depositors: ____ </p>
              <p>Current Depositors: ____ amazing supporters</p>
              <p>Standard Deposit Amount: ____ ETH </p>
              <p>Discounted Deposit Amount: ____ ETH</p>
            </St.ContractBody>
          </St.ContractSection>
        </St.Left>
        <St.Right>
          <St.StandardDeposit>
            <h2>Contract Interactions</h2>
            <h6>Standard Deposit</h6>
            <p>
              You can set an address to be the recipient of this project's token
              (0x form only - no ENS). If left blank, the depositing account
              will be set as recipient. Please consider using a vault that is
              delegated to a depositing account. The 100x10x1-A interactive
              functions support delegation through delegate.xyz.
            </p>
            <St.ButtonRow className="dark:border-3 dark:border-white">
              <St.UserInput
                className="border-none bg-offset p-4 font-sans outline-none dark:text-black max-sm:text-[12px]"
                placeholder="Optional: 0x address recipient"
              />
              <St.DepositButton className="hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark">
                SUBMIT ___ETH
              </St.DepositButton>
            </St.ButtonRow>
          </St.StandardDeposit>
          <St.TokenDeposit>
            <h6>Token-Gated Deposit</h6>
            <p>
              To receive the discount, enter the eligible token's ID. This token
              must be owned by the depositing account or a vault that delegates
              to it. The recipient account will be set to whichever account owns
              the eligible token.
            </p>
            <St.ButtonRow className="dark:border-3 dark:border-white">
              <St.UserInput
                className="border-none bg-offset p-4 font-sans outline-none dark:text-black max-sm:text-[12px]"
                placeholder="Chainlife tokenID required"
              />
              <St.DepositButton className="hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark">
                SUBMIT ___ETH
              </St.DepositButton>
            </St.ButtonRow>
          </St.TokenDeposit>
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
              <St.CancelButton className="hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark">
                CANCEL DEPOSIT
              </St.CancelButton>
            </St.CancelButtonRow>
          </St.CancelDeposit>
        </St.Right>
      </St.BodyContainer>
    </>
  );
};

export default DepositMain;
