import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;

  @media (max-width: 915px) {
    justify-content: space-evenly;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
  min-width: 275px;
`;

export const Title = styled.h2`
  font-weight: 400;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme: { colors } }) => colors.textMain};
  max-width: 275px;

  .active {
    background-color: ${({ theme: { colors } }) => colors.textMain};
    color: ${({ theme: { colors } }) => colors.bgMain};
  }
`;

export const Tab = styled.div`
  min-width: 75px;
  text-align: center;
  padding: 0 0.75em;
  transition: all 0.3s ease;

  :not(:last-child) {
    border-right: 2px solid ${({ theme: { colors } }) => colors.textMain};
  }

  :hover {
    background-color: ${({ theme: { colors } }) => colors.textMain};
    color: ${({ theme: { colors } }) => colors.bgMain};
    cursor: pointer;
  }
`;
