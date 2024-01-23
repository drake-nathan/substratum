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
`;

export const Unlocked = styled(IoLockOpen)`
  font-size: 19px;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 2000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const HowSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 36px;

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 36px;

  h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const DiscountGrid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  border: 3px solid #0f0f0f;
  min-width: 600px;

  p {
    padding: 20px;
    @media (max-width: 1540px) {
      font-size: 16px;
      padding-bottom: 10px;
    }
  }
`;

export const Right = styled.div`
  background: yellow;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const TokenThumb = styled.img`
  border-left: 3px solid #0f0f0f;
  object-fit: cover;
`;
