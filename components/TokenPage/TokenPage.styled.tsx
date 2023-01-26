import styled from 'styled-components';
import { IoReturnUpBackSharp } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin-top: ${({ theme: { isMobile } }) => (isMobile ? '1em' : '2em')};
  gap: 0.25em;

  @media (max-width: 1000px) {
    width: min-content;
  }
`;

export const TitleHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${({ theme: { isMobile } }) => isMobile && `margin-bottom: 1em;`}
`;

export const Title = styled.h1`
  font-size: ${({ theme: { isMobile } }) => (isMobile ? '2rem' : '2.25rem')};
  letter-spacing: 3px;

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.teal};
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtistDiv = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5em;

  h3 {
    font-size: 1.25rem;
    letter-spacing: 1.5px;
  }
`;

export const By = styled.h3`
  font-weight: 400;
`;

export const ArtistName = styled.h3`
  :hover {
    color: ${({ theme: { colors } }) => colors.teal};
  }
`;

export const BackDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.teal};
  }
`;

export const BackText = styled.h4`
  font-weight: 500;
`;

export const BackIcon = styled(IoReturnUpBackSharp)`
  font-size: 1.75rem;
`;
