import styled from 'styled-components';
import { IoReturnUpBackSharp } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TokenHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5em;
  margin-top: 1.75em;

  @media (max-width: 800px) {
    padding: 3em;
    margin-top: 1.25em;
  }

  @media (max-width: 500px) {
    padding: 23px;
    margin-top: 1em;
  }
`;

export const Title = styled.h1`
  @media (max-width: 800px) {
    font-size: 1.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.hover};
  }
`;

export const ArtistDiv = styled.div`
  display: flex;
  gap: 0.5em;
  margin-bottom: 1.5em;

  h3 {
    font-family: 'basic-sans', sans-serif !important;
    font-size: 32px;
    font-style: italic;
    text-transform: initial;

    @media (max-width: 800px) {
      font-size: 26px;
    }

    @media (max-width: 500px) {
      font-size: 22px;
    }
  }
`;

export const By = styled.h3`
  font-weight: 400;
`;

export const ArtistName = styled.h3`
  :hover {
    color: ${({ theme: { colors } }) => colors.hover};
  }
`;

export const TokenStatus = styled.div`
  font-family: 'basic-sans', sans-serif;
  font-size: 26px;
  font-style: italic;
  @media (max-width: 800px) {
    font-size: 22px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const TokenInfoHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 5em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};

  @media (max-width: 800px) {
    padding: 0 3em;
  }
  @media (max-width: 500px) {
    padding: 0 23px;
  }
`;

export const Header = styled.h2`
  margin-bottom: 0.25em;

  @media (max-width: 800px) {
    font-size: 1.3em;
  }

  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`;

// export const BackDiv = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5em;

//   :hover {
//     cursor: pointer;
//     color: ${({ theme: { colors } }) => colors.textMain};
//   }
// `;

export const BackText = styled.h4`
  font-weight: 500;
`;

export const BackIcon = styled(IoReturnUpBackSharp)`
  font-size: 1.75rem;
`;
