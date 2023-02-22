import styled from 'styled-components';
import { RxOpenInNewWindow } from 'react-icons/rx';

export const Container = styled.div`
  width: 100%;
  padding: 3em 5em;
  margin-bottom: 1em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme: { isMobile } }) => (isMobile ? '1em' : '1.5em')};

  @media (max-width: 1250px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 1em;
  }
`;

export const DescContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1250px) {
    justify-content: space-evenly;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};

  // for adjusting the border
  @media (min-width: 776px) {
    width: 100%;
    max-width: 695px;
  }

  @media (max-width: 1250px) {
    text-align: center;
    align-items: center;
    gap: 0.5em;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 3px;

  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;

export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 775px) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 0.75em;
  }
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
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const Image = styled.img`
  --size: 350px;
  max-width: var(--size);
  max-height: var(--size);
  aspect-ratio: 1/1;
  object-fit: cover;

  @media (max-width: 400px) {
    --size: 325px;
  }
`;

export const DescSection = styled.div`
  width: 100%;
  min-width: 225px;

  @media (max-width: 1250px) {
    min-width: 350px;
  }

  @media (max-width: 400px) {
    min-width: 325px;
  }
`;

export const DescTitle = styled.h2`
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  max-width: 30ch;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  margin-top: 1em;
  font-size: 1.125rem;

  :hover {
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const Link = styled.span`
  text-decoration: underline;
`;

export const OpenInNewIcon = styled(RxOpenInNewWindow)`
  font-weight: 500;
`;
