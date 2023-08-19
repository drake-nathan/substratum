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
  margin-bottom: 5em;
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
  grid-template-columns: 1fr 1fr;
  gap: 0 5em;

  grid-template-areas:
    'token-name token-name'
    'generator traits'
    'generator stats'
    'generator buy';
`;

export const Token = styled.div`
  grid-area: generator;
  border: 1px solid ${(props) => props.theme.colors.textMain};
  height: max-content;
`;

export const TokenRibbon = styled.div``;

export const TraitsWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
  align-self: stretch;
  grid-area: traits;
`;

export const StatsSection = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
  grid-area: stats;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 0;
`;

export const TokenIndex = styled.h3``;

export const MintDateTime = styled.p``;

export const BuyToken = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
  grid-area: buy;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 1em 0;

  .coins {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: 30px;
  }
`;

export const InfoTitle = styled.h3``;

export const Price = styled.span`
  font-size: 20px;
  font-family: 'basic-sans', sans-serif;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 0.5em;
  background-color: ${({ theme: { colors } }) => colors.textMain};
  color: ${({ theme: { colors } }) => colors.bgMain};
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hover};
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
