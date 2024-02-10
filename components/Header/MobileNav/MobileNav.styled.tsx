import { styled } from "styled-components";

interface IsOpen {
  $isOpen: boolean;
}

export const Container = styled.div<IsOpen>`
  position: fixed;
  z-index: 69;
  top: 0;
  right: 0;
  height: 100svh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;

  background-color: ${({ theme }) => theme.colors.bgMain};

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(+100vw)"};
  transition-duration: 350ms;
  transition-delay: 200ms;
  transition-timing-function: ease-in-out;

  @media (max-height: 700px) {
    padding: 2em 2em 7em;
  }
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textMain};
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
`;
