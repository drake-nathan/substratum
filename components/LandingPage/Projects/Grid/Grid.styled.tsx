import styled from 'styled-components';

type Width = { width: number };

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

export const Grid = styled.div<Width>`
  width: ${({ width }) => width}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding-top: 1em;
  margin-top: 2em;
`;
