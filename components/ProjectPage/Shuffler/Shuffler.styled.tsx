import styled from 'styled-components';

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
`;

export const TopAction = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
`;

export const TopButton = styled(ActionButton)`
  width: 100%;
`;

export const IDInput = styled.input`
  width: 100%;
  background-color: #f4f1ed;
  font-family: 'basic-sans', sans-serif;
  padding: 1em;
  outline: unset;
  border: none;
`;

export const ViewButton = styled.div`
  background-color: #ded8d1;
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
