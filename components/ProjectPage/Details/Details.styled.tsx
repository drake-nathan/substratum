import styled from 'styled-components';
import { RxOpenInNewWindow } from 'react-icons/rx';

export const DetailContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2em;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }

  /* @media (max-width: 1250px) {
    justify-content: space-evenly;
  } */

  @media (max-width: 500px) {
    padding: 0 23px;
    margin-top: 23px;
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;

  @media (max-width: 800px) {
    min-width: auto;
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;

export const Image = styled.img`
  /* --size: 350px; */
  /* max-width: var(--size); */
  /* max-height: var(--size); */
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.textMain};

  /* @media (max-width: 400px) {
    --size: 325px;
  } */
`;

export const ProjectImageNameContainer = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme: { colors } }) => colors.textMain};

  .expand {
    font-size: 28px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (max-width: 800px) {
    .expand {
      font-size: 20px;
    }
  }
`;

export const ProjectImageName = styled.span`
  flex: 1 1 0;
  text-align: left;
  font-family: 'basic-sans', sans-serif;
  font-style: italic;
  font-size: 28px;
  color: ${({ theme: { colors } }) => colors.textMain};

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSection = styled.div`
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
  margin-top: 0.5em;
`;

export const SmallDescTitle = styled.h4`
  margin: 0.5em 0 0.25em;
  font-family: 'basic-sans', sans-serif;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Text = styled.p`
  max-width: 60ch;
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

export const OtherCollectionsContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  margin-top: 3em;
`;

export const OtherCollectionsHeader = styled.h2`
  margin-bottom: 0.5em;
`;

export const OtherCollections = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
`;
