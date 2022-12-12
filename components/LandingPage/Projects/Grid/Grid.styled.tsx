import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 5em;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;

export const Title = styled.h2`
  font-weight: 400;
`;
