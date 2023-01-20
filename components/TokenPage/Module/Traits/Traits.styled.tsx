import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0 1.5em 2em;
  overflow-y: auto;

  ::-webkit-scrollbar {
    background-color: ${({ theme: { colors } }) => colors.textOffset};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (max-width: 650px) {
    padding: 0;
    border-top: 1px solid ${({ theme: { colors } }) => colors.textOffset};
    margin-top: 0.5em;
    padding-top: 0.5em;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: 1.5px;

  @media (max-width: 650px) {
    font-size: 1.125rem;
  }
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  a {
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 650px) {
    font-size: 0.875rem;
  } ;
`;

export const Name = styled.span`
  overflow: hidden;
`;

export const Value = styled.span`
  overflow: hidden;
  white-space: nowrap;
`;

export const TooltipBox = styled.div`
  position: relative;
`;
