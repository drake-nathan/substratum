import styled from 'styled-components';

type GridProps = { width: number; columns: number };

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* max-width: ${({ width }) => width}px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  padding: 1em 90px 0 90px;
  margin-top: 2em;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
