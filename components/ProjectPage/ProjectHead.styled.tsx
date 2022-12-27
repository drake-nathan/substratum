import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3em 5em;
  margin-bottom: 1em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;
`;

export const DescContainer = styled.div`
  display: flex;
  gap: 2em;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  text-align: center;
  letter-spacing: 4px;
`;

export const Image = styled.img`
  max-width: 350px;
  max-height: 350px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const DescSection = styled.div``;

export const DescTitle = styled.h2`
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  max-width: 30ch;
`;
