import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 4em;

  ::-webkit-scrollbar {
    background-color: ${({ theme: { colors } }) => colors.textMain};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const Tab = styled.button<{ $active: boolean }>`
  ${({ $active, theme: { colors } }) =>
    $active ? `border-bottom: 2px solid ${colors.textMain};` : ""}

  h3 {
    color: ${({ theme: { colors } }) => colors.textMain};
    text-transform: uppercase;

    @media (max-width: 650px) {
      font-size: 1.125rem;
    }
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
    justify-self: end;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 650px) {
    font-size: 0.875rem;
  }
`;

export const Name = styled.span`
  overflow: hidden;
  font-weight: 600;
  font-size: 18px;
`;

export const Value = styled.span`
  overflow: hidden;
  white-space: nowrap;
  justify-self: end;
  font-size: 18px;
`;

export const TooltipBox = styled.div`
  position: relative;
`;

export const Description = styled.p`
  line-height: 1.3;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 1em;

  @media (max-width: 650px) {
    font-size: 0.875rem;
  }
`;
