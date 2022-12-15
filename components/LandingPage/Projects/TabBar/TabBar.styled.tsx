import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
`;

export const Title = styled.h2`
  font-weight: 400;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme: { colors } }) => colors.hover};

  .active {
    background-color: ${({ theme: { colors } }) => colors.textMain};
    color: ${({ theme: { colors } }) => colors.bgOffset};
  }
`;

export const Tab = styled.div`
  min-width: 75px;
  text-align: center;
  padding: 0 0.75em;
  transition: all 0.3s ease;

  :not(:last-child) {
    border-right: 2px solid ${({ theme: { colors } }) => colors.hover};
  }

  :hover {
    background-color: ${({ theme: { colors } }) => colors.hover};
    color: ${({ theme: { colors } }) => colors.bgOffset};
    cursor: pointer;
  }
`;
