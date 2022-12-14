import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3em 5em;
  margin-bottom: 1em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textOffset};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;

  @media (max-width: 1250px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 1em;
  }
`;

export const DescContainer = styled.div`
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
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textOffset};

  // for adjusting the border
  @media (min-width: 775px) {
    width: 100%;
    max-width: 650px;
  }

  @media (max-width: 1250px) {
    text-align: center;
  }

  @media (max-width: 615px) {
    padding: 1em 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 4px;
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
