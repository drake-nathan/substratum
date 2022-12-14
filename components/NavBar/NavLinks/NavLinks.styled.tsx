import styled from 'styled-components';
import { RxCaretDown } from 'react-icons/rx';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.isMobile && 'flex-direction: column;'}

  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  padding: 0.125em 0.5em;
  background-color: ${({ theme: { colors } }) => colors.textMain};
  color: ${({ theme: { colors } }) => colors.bgMain};

  :hover {
    background-color: ${({ theme: { colors } }) => colors.bgOffset};
    color: ${({ theme: { colors } }) => colors.textMain};
    cursor: pointer;
  }

  :nth-child(2) {
    background-color: ${({ theme: { colors } }) => colors.bgOffset};
    color: ${({ theme: { colors } }) => colors.textMain};

    :hover {
      background-color: ${({ theme: { colors } }) => colors.textMain};
      color: ${({ theme: { colors } }) => colors.bgMain};
    }
  }
`;

export const Text = styled.span`
  font-size: ${({ theme: { isMobile } }) => (isMobile ? '1.75rem' : '1.125rem')};
  font-weight: 400;
  letter-spacing: 0.75px;

  @media (max-height: 700px) and (max-width: 500px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

type IsDropDownOpen = { isDropDownOpen: boolean };

export const DropdownIcon = styled(RxCaretDown)<IsDropDownOpen>`
  font-size: 2.25rem;
  margin: -5px;
  margin-right: -9px;
  transform: ${({ isDropDownOpen }) =>
    isDropDownOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.25s ease-in-out;
`;
