import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import styled from "styled-components";

export const NoteFromMattoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const MattoNoteHeader = styled.h1`
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const NoteBox = styled.div`
  width: 75%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 15px;
  border: 3px solid #0f0f0f;

  @media (max-width: 768px) {
    width: 85%;
  }

  p {
    text-align: center;
  }
`;

export const NoteText = styled.p`
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MintStage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const StageStatus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const DepositsStatus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  height: 90px;
`;

export const BoldText = styled.p`
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CheckBox = styled(MdOutlineCheckBox)`
  font-size: 20px;
  margin-right: 10px;
`;

export const BlankBox = styled(MdOutlineCheckBoxOutlineBlank)`
  font-size: 20px;
`;

export const Locked = styled(IoLockClosed)`
  font-size: 19px;
  margin-left: -10px;
  margin-top: -4px;
`;

export const Unlocked = styled(IoLockOpen)`
  font-size: 19px;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 2000px;

  @media (max-width: 1425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 2rem;
    max-width: 1000px;

    p {
      font-size: 16px;
    }
  }
`;

export const Left = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 650px) {
    width: 99%;
  }
`;

export const HowSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const DiscountGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border: 3px solid #0f0f0f;
  min-width: 500px;
  max-width: 650px;

  @media (max-width: 500px) {
    min-width: 0px;
    max-width: 100%;
    grid-template-columns: 5fr 1fr;
  }

  p {
    padding: 20px;
    @media (max-width: 1540px) {
      font-size: 18px;
      padding: 10px;
    }
    @media (max-width: 810px) {
      font-size: 16px;
    }
  }
`;

export const TokenThumb = styled.img`
  border-left: 3px solid #0f0f0f;
  object-fit: cover;
  @media (max-width: 500px) {
    border-bottom: 3px solid #0f0f0f;
  }
`;

export const ContractSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const ContractBody = styled.div`
  border: 3px solid #0f0f0f;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 35px;
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 0px;
    max-width: 100%;
  }

  p {
    @media (max-width: 1540px) {
      font-size: 18px;
    }
  }
`;

export const Right = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 650px) {
    width: 99%;
  }
`;

export const InteractionsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  @media (max-width: 650px) {
    justify-content: center;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const StandardDeposit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 650px) {
    align-items: center;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
    text-align: center;
  }

  h6 {
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

export const TokenDeposit = styled(StandardDeposit)``;

export const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  border: 3px solid #0f0f0f;
  min-width: 600px;
  margin-top: 20px;

  @media (max-width: 650px) {
    min-width: 0px;
    max-width: 365px;
    grid-template-columns: 70% 30%;
  }
`;

export const UserInput = styled.input`
  border: 3px solid #0f0f0f;
  height: 75px;
  min-width: 325px;
  padding-left: 10px;
  display: flex;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    &::placeholder {
      font-size: 13px;
    }
  }
`;

export const DepositButton = styled.button`
  background: #0f0f0f;
  color: #f5f5f5;
  height: 75px;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 650px) {
    font-size: 16px;
    padding: 8px;
    font-weight: 600;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 2px;
    font-weight: 600;
  }
`;
export const CancelButton = styled.button`
  background: #0f0f0f;
  color: #f5f5f5;
  height: 75px;
  width: 375px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 650px) {
    font-size: 16px;
    padding: 8px;
    font-weight: 600;
    width: 100%;
  }
`;

export const CancelButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CancelDeposit = styled(TokenDeposit)``;
