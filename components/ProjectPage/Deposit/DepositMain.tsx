import { useState } from "react";

import {
  BlankBox,
  BodyContainer,
  BoldText,
  ButtonRow,
  CancelButton,
  CancelButtonRow,
  CancelDeposit,
  CheckBox,
  ContractBody,
  ContractSection,
  DepositButton,
  DepositsStatus,
  DiscountGrid,
  DiscountSection,
  HowSection,
  InteractionsSection,
  Left,
  Locked,
  MattoNoteHeader,
  MintStage,
  NoteBox,
  NoteFromMattoContainer,
  NoteText,
  Right,
  StageStatus,
  StandardDeposit,
  TokenDeposit,
  TokenThumb,
  Unlocked,
  UserInput,
} from "./DepositMain.styled";

const DepositMain = (): React.JSX.Element => {
  const [isDepositOpen, setIsDepositOpen] = useState(false);

  const [isMintPublic, setIsMintPublic] = useState(false);

  const [isMintPrivate, setIsMintPrivate] = useState(true);

  const apos = "'";

  return (
    <>
      <NoteFromMattoContainer>
        <MattoNoteHeader>A Note From Matto</MattoNoteHeader>
        <NoteBox>
          <NoteText>
            A NOTE FROM MATTO “100x10x1 Composition A is unique in that full
            functionality of the project only happens
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
            .”
          </NoteText>
        </NoteBox>
      </NoteFromMattoContainer>
      <MintStage>
        <StageStatus>
          <BoldText>STAGE:</BoldText>
          <NoteText>ALLOW LIST</NoteText>
          {isMintPrivate ? <CheckBox /> : <BlankBox />}
          <NoteText>PUBLIC</NoteText>
          {isMintPublic ? <CheckBox /> : <BlankBox />}
        </StageStatus>
        <DepositsStatus>
          <BoldText>DEPOSITS:</BoldText>
          {isDepositOpen ? <Unlocked /> : <Locked />}
        </DepositsStatus>{" "}
      </MintStage>
      <BodyContainer>
        <Left>
          <HowSection>
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
          </HowSection>
          <DiscountSection>
            <h2>Token-Gated Discount</h2>
            <DiscountGrid>
              <p>
                To be eligible for a discount the depositing account or a vault
                that delegates to it must own a{" "}
                <span style={{ fontSize: "16px", textDecoration: "underline" }}>
                  Chainlife token
                </span>{" "}
                The address that holds the qualifying token will be recorded as
                the recipient of the 100x10x1-A token.
              </p>
              <TokenThumb alt="Chainlife 17" src="/icons/chainlife_17.PNG" />
            </DiscountGrid>
          </DiscountSection>
          <ContractSection>
            <h2>Contract Status</h2>
            <ContractBody>
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
              <p>Goal Number of Allowed Depositors: ____ </p>
              <p>Current Depositors: ____ amazing supporters</p>
              <p>Current Contract Balance: ____ ETH Required</p>
              <p>Deposit for Non-Token Holders: ____ ETH </p>
              <p>Required Deposit for Token Holders: ____ ETH</p>
            </ContractBody>
          </ContractSection>
        </Left>
        <Right>
          <InteractionsSection>
            <h2>Contract Interactions</h2>
            <StandardDeposit>
              <h6>Standard Deposit</h6>
              <p>
                You can set an address to be the recipient of this project's
                token (0x form only - no ENS). If left blank, the depositing
                account will be set as recipient. Please consider using a vault
                that is delegated to a depositing account. The 100x10x1-A
                interactive functions support delegation through delegate.xyz.
              </p>
              <ButtonRow>
                <UserInput placeholder="Optional: 0x address recipient" />
                <DepositButton>SUBMIT DEPOSIT ___ETH</DepositButton>
              </ButtonRow>
            </StandardDeposit>
          </InteractionsSection>
          <TokenDeposit>
            <h6>Token-Gated Deposit</h6>
            <p>
              You can set an address to be the recipient of this project's token
              (0x form only - no ENS). If left blank, the depositing account
              will be set as recipient. Please consider using a vault that is
              delegated to a depositing account. The 100x10x1-A interactive
              functions support delegation through delegate.xyz.
            </p>
            <ButtonRow>
              <UserInput placeholder="Optional: delegated 0x address holding token" />
              <DepositButton>SUBMIT DEPOSIT ___ETH</DepositButton>
            </ButtonRow>
          </TokenDeposit>
          <CancelDeposit>
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
            <CancelButtonRow>
              <CancelButton>CANCEL DEPOSIT</CancelButton>
            </CancelButtonRow>
          </CancelDeposit>
        </Right>
      </BodyContainer>
    </>
  );
};

export default DepositMain;
