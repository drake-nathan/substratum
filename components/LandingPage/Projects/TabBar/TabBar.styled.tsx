import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 90px;
  flex-wrap: wrap;

  /* @media (max-width: 915px) {
    justify-content: space-evenly;
  } */
`;

export const Title = styled.h2`
  padding-bottom: 0.25em;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6em;

  .active {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const Tab = styled.div`
  text-align: center;
  padding: 0 1em 0.5em;
  transition: all 0.3s ease;
  font-family: 'basic-sans', sans-serif;
  font-size: 24px;
  font-weight: 300;
  font-style: italic;

  :hover {
    cursor: pointer;
  }
`;
