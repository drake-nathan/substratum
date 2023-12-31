import { FaEye, FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const ActionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background-color: ${({ theme: { colors } }) => colors.textMain};
  color: ${({ theme: { colors } }) => colors.bgMain};
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hover};
  }
`;

export const ButtonGrid = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "top top"
    "cut overhand"
    "faro wash"
    "reverse reverse"
    "vault vault";

  gap: 1.25em 1em;

  @media (max-width: 800px) {
    grid-template-areas:
      "top top"
      "cut cut"
      "overhand overhand"
      "faro faro"
      "wash wash"
      "reverse reverse"
      "vault vault";
  }
`;

export const TopAction = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
`;

export const ViewLayer = styled.div`
  display: flex;
  flex: 1 1 100%;
`;

export const VaultForm = styled.form`
  display: flex;
  flex: 1 1 100%;
`;

export const ViewButton = styled.button`
  background-color: #ded8d1;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #999795;
  }
`;

export const EyeIcon = styled(FaEye)`
  color: #00000076;
  font-size: 28px;
  align-self: center;
`;

export const SearchIcon = styled(FaSearch)`
  color: #00000076;
  font-size: 28px;
  align-self: center;
`;

export const ErrorText = styled.p`
  color: red;
`;
