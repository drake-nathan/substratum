import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3em 5em;

  /* @media (min-width: 651px) {
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.bgMain};
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.75em 3em 4em;
  } */
`;

export const TokenNameAndOwner = styled.div`
  grid-area: token-name;
`;

export const TokenName = styled.h3`
  font-weight: 500;
`;
export const TokenOwner = styled.h6`
  font-weight: 300;
  font-size: 26px;
`;

export const InfoGrid = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 1fr;

  grid-template-areas:
    'token-name token-name'
    'generator traits'
    'generator project-index'
    'generator buy';
`;

export const Token = styled.div`
  grid-area: generator;
`;

export const TokenRibbon = styled.div``;

export const TraitsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  grid-area: traits;
`;

export const StatsSection = styled.div``;

export const TokenIndex = styled.h3`
  grid-area: project-index;
`;

export const MintDateTime = styled.p``;

export const BuyToken = styled.div`
  grid-area: buy;
`;

export const InfoTitle = styled.h3``;

export const Price = styled.span``;

export const BuyButton = styled.button``;

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
