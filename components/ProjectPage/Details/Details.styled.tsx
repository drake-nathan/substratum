import styled from 'styled-components';
import { RxOpenInNewWindow } from 'react-icons/rx';

export const ProjectImage = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;

export const Image = styled.img`
  /* --size: 350px; */
  /* max-width: var(--size); */
  /* max-height: var(--size); */
  min-width: 350px;
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;

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

export const DetailContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2em;

  /* @media (max-width: 1300px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1250px) {
    justify-content: space-evenly;
  } */

  @media (max-width: 500px) {
    padding: 0 23px;
    margin-top: 23px;
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

export const CollectionsContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
`;
