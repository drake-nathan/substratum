import styled from 'styled-components';
import { FaEye } from 'react-icons/fa';

export const ActionButton = styled.button`
  width: 100%;
  padding: 0.5em;
  background-color: ${({ theme: { colors } }) => colors.textMain};
  color: ${({ theme: { colors } }) => colors.bgMain};
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.hover};
  }
`;

export const ButtonGrid = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-areas:
    'top top'
    'cut overhand'
    'faro wash'
    'reverse reverse';

  gap: 1.25em 1em;

  @media (max-width: 800px) {
    grid-template-areas:
      'top top'
      'cut cut'
      'overhand overhand'
      'faro faro'
      'wash wash'
      'reverse reverse';
  }
`;

export const TopAction = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
`;

export const TopButton = styled(ActionButton)`
  width: 100%;
`;

export const ViewLayer = styled.div`
  display: flex;
`;

export const IDInput = styled.input`
  flex: 1 1 100%;
  background-color: #f4f1ed;
  font-family: 'basic-sans', sans-serif;
  padding: 1em;
  outline: unset;
  border: none;
`;

export const ViewButton = styled.div`
  background-color: #ded8d1;
  height: 100%;
  width: 3em;
  display: flex;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: #999795;
  }
`;

export const EyeIcon = styled(FaEye)`
  color: #00000076;
  font-size: 28px;
  align-self: center;
`;

export const CutButton = styled(ActionButton)`
  grid-area: cut;
`;

export const OverhandButton = styled(ActionButton)`
  grid-area: overhand;
`;

export const FaroButton = styled(ActionButton)`
  grid-area: faro;
`;

export const WashButton = styled(ActionButton)`
  grid-area: wash;
`;

export const ReverseButton = styled(ActionButton)`
  grid-area: reverse;
`;
