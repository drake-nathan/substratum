import styled from "styled-components";

export const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  cursor: pointer;

  @media (max-width: 500px) {
    height: 200vh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: 1.75em 2.5em;
  z-index: 40;
  min-width: 300px;
`;

export const Header = styled.h3``;

export const Text = styled.p`
  max-width: 30ch;
  text-align: center;
  font-weight: 600;
`;

export const Error = styled(Text)`
  text-decoration: underline;
`;

export const SubText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.hover};
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 1.125rem;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: 0.5em 1em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
  }
`;
