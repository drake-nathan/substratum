import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: ${({ theme: { colors } }) => colors.bgMain};
  color: ${({ theme: { colors } }) => colors.textMain};
  cursor: default;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
