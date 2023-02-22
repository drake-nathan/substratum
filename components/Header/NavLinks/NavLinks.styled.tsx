import styled from 'styled-components';
import { RxCaretDown } from 'react-icons/rx';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;

  @media (max-width: 775px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 1em;
  }
`;

export const ProjectsMobileDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  padding: 0.125em 0.5em;

  :hover {
    ${({ theme: { isMobile } }) =>
      !isMobile && 'cursor: pointer; text-decoration: underline; '};
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
  font-size: ${({ theme: { isMobile } }) => (isMobile ? '1.75rem' : '18px')};
  font-weight: 400;
  text-transform: uppercase;

  /* @media (max-height: 700px) and (max-width: 500px) {
    font-size: 1.5rem;
    font-weight: 500;
  } */
`;

export const DropdownIcon = styled(RxCaretDown)`
  font-size: 1.75rem;
  margin: -5px;
  margin-right: -9px;
  transition: transform 0.25s ease-in-out;
`;
