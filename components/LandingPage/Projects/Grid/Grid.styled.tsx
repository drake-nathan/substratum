import styled from 'styled-components';

type GridProps = { width: number; columns: number };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5em;

  @media (max-width: 500px) {
    margin-top: 1em;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid ${({ theme: { colors } }) => colors.textMain};
`;

export const Grid = styled.div<GridProps>`
  width: ${({ width }) => width}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
    width: calc(100% - 180px);
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: calc(100% - 180px);
  }
  @media (max-width: 500px) {
    width: calc(100% - 3em);
  }
  gap: 2em;
  padding-top: 1em;
  margin-top: 2em;
`;
