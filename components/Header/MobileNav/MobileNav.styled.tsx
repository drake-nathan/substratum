import styled from 'styled-components';

type IsOpen = { isOpen: boolean };

export const Container = styled.div<IsOpen>`
  --top-gap: 75px;
  position: fixed;
  z-index: 69;
  top: var(--top-gap);
  right: 0;
  height: calc(100vh - var(--top-gap));
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  padding: 3em 2em 9em;

  background-color: ${({ theme }) => theme.colors.bgMain};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(+100vw)'};
  transition-duration: 400ms;
  transition-delay: 250ms;

  @media (max-height: 700px) {
    padding: 2em 2em 7em;
  }
`;

// export const ProjectsList =
