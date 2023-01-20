import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin-top: 2em;
  gap: 1.5em;

  @media (max-width: 1000px) {
    width: min-content;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  letter-spacing: 1.5px;

  :hover {
    cursor: pointer;
  }
`;
