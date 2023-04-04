import styled from 'styled-components';

type Width = { width: number };

export const Container = styled.div<Width>`
  width: 100%;
  max-width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
  margin-top: 5em;

  @media (max-width: 500px) {
    margin: 0;
    padding: 2em 1.5em 0 1.5em;
  }
`;

export const Title = styled.h1`
  font-family: 'Exo', sans-serif;
  font-size: 2.75rem;
  font-weight: 200;
  letter-spacing: 1px;
  margin-bottom: -10px;

  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.h4`
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  text-transform: lowercase;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Line = styled.hr`
  width: 34px;
  border: 0.5px solid ${({ theme: { colors } }) => colors.textMain};
  margin: 0.5em 0;
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 2.5em;

  @media (max-width: 500px) {
    margin-bottom: 1.5em;
  }
`;

export const ListItem = styled.li`
  font-size: 0.75rem;
`;

export const ListText = styled.p`
  font-size: 18px;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Subtle = styled.p`
  font-size: 16px;
  font-weight: 300;
  max-width: 60ch;
  margin-bottom: 0.75em;

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
