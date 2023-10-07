import styled from "styled-components";

export const ConnectButton = styled.div`
  height: 90px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;
  color: #fffcf9;
  border-left: 1px solid #fffcf9;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
