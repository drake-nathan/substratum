import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin-top: 2em;
  gap: 1.5em;

  @media (max-width: 1000px) {
    width: auto;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
