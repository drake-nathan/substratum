import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 651px) {
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.bgOffset};
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.75em 3em 4em;
  }
`;

type Props = { height: number; width: number };

export const InnerContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  max-height: ${({ height }) => height}px;
  background-color: ${({ theme: { colors } }) => colors.bgMain};

  @media (min-width: 651px) {
    box-shadow: inset 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 650px) {
    max-width: ${({ width }) => width}px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    max-height: none;
    width: auto;
  }
`;

export const TraitsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
