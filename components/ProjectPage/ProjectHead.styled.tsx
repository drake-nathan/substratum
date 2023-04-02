import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5em 5em;
  margin-bottom: 1em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: ${({ theme: { isMobile } }) => (isMobile ? '0' : '0.5em')}; */

  /* @media (max-width: 1250px) {
    align-items: center;
  } */

  @media (max-width: 500px) {
    padding: 23px;
  }
`;

// export const TitleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};

//   // for adjusting the border
//   @media (min-width: 776px) {
//     width: 100%;
//     max-width: 695px;
//   }

//   @media (max-width: 1250px) {
//     text-align: center;
//     align-items: center;
//     gap: 0.5em;
//   }
// `;

export const Title = styled.h1`
  font-size: 2.25rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

// export const BottomRow = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   @media (max-width: 775px) {
//     flex-direction: column;
//     gap: 1em;
//     margin-bottom: 0.75em;
//   }
// `;

export const ArtistDiv = styled.div`
  display: flex;
  justify-items: flex-start;
  gap: 0.25em;
  margin-bottom: 20px;
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
  :hover {
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
