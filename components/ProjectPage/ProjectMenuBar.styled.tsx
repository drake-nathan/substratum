import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 80px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};

  @media (max-width: 500px) {
    padding: 0 1.5em;
  }
`;

export const Title = styled.h2`
  padding-bottom: 0.25em;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;

  .active {
    border-color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (max-width: 500px) {
    gap: 0.375em;
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
  border-bottom: 2px solid transparent;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 0 0.25em 0.25em;
  }
`;
