import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5em;
  margin-top: 1.75em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 500px) {
    padding: 23px;
    margin-top: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const ArtistDiv = styled.div`
  display: flex;
  justify-items: flex-start;
  gap: 0.5em;
  margin-bottom: 1.5em;
  h3 {
    text-transform: capitalize;
    font-family: 'basic-sans', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 32px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const By = styled.h3``;

export const ArtistName = styled.h3`
  font-weight: 600 !important;
  &:hover {
    color: ${({ theme: { colors } }) => colors.hover};
  }
`;

export const TokenStatus = styled.div`
  font-family: 'basic-sans', sans-serif;
  font-size: 26px;
  font-style: italic;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const MarketIconsWrapper = styled.div`
  margin-left: 0.25em;
`;
