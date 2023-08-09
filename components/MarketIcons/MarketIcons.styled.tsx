import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.125em;

  .icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textMain};

    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
