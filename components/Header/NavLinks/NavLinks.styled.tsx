import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import styled from "styled-components";

export const Tab = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  padding: 0.125em 0.5em;

  &:hover {
    ${({ theme: { isMobile } }) =>
      !isMobile && "cursor: pointer; text-decoration: underline; "};
  }

  @media (max-width: 775px) {
    .underline {
      text-decoration: underline;
    }
  }

  // class name for dropdown icon logic
  .dropdown-flip {
    transform: rotate(180deg);
  }
`;

export const Text = styled.span`
  font-size: ${({ theme: { isMobile } }) => (isMobile ? "1.75rem" : "18px")};
  font-weight: 400;
  text-transform: uppercase;
`;

export const DropdownIcon = styled(RxCaretDown)`
  font-size: 1.75rem;
  margin: -5px;
  margin-right: -9px;
  transition: transform 0.25s ease-in-out;
`;

export const RightArrowIcon = styled(RxCaretRight)`
  font-size: 1.75rem;
  margin-left: -3px;
  margin-top: -2px;
`;
