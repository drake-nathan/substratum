import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 5em;
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 21px;

  @media (max-width: 915px) {
    justify-content: space-evenly;
  }
`;
