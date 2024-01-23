import { useState } from "react";

import {
  BlankBox,
  BodyContainer,
  BoldText,
  CheckBox,
  DepositsStatus,
  DiscountGrid,
  DiscountSection,
  HowSection,
  Left,
  Locked,
  MattoNoteHeader,
  MintStage,
  NoteBox,
  NoteFromMattoContainer,
  NoteText,
  Right,
  StageStatus,
  TokenThumb,
  Unlocked,
} from "./DepositMain.styled";

const DepositMain = (): React.JSX.Element => {
  const [isDepositOpen, setIsDepositOpen] = useState(false);

  const [isMintPublic, setIsMintPublic] = useState(false);

  const [isMintPrivate, setIsMintPrivate] = useState(true);

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
            if they are 'individual' and able to communicate with each other.
            Based on these aspects and my general disdain for{" "}
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
              . If a mint is assigned to an account that the artist doesn't
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
              airdropped to their specified 'recipient' address (or in case of
              emergency, they will receive a full refund).
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

          <h1>Left 3</h1>
        </Left>
        <Right>
          <h1>Right 1</h1>
          <h1>Right 2</h1>
          <h1>Right 3</h1>
        </Right>
      </BodyContainer>
    </>
  );
};

export default DepositMain;
