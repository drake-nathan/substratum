import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import styled from "styled-components";

export const DepositHeadContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const DepositHeader = styled.h1`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const DepositSubHeader = styled.h5`
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DepositText = styled.p`
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Address = styled.li`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AllowListAddressContainer = styled.ul`
  line-height: 2;
  height: 275px;
  overflow-y: scroll;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  overflow-x: hidden;
  //list-style: inside;

  &:-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const LinkRow = styled.div`
  @media (max-width: 768px) {
    justify-content: start;
  }
`;

export const AllowListLink = styled.a`
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const BackLink = styled.a`
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const RightArrowIcon = styled(RxCaretRight)`
  font-size: 1.75rem;
  margin-left: -3px;
  margin-top: -2px;
`;

export const LeftArrowIcon = styled(RxCaretLeft)`
  font-size: 1.75rem;
  margin-top: -2px;
  margin-left: -5px;
`;
