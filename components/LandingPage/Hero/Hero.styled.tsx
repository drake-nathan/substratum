import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  margin-top: 5em;
`;

export const Title = styled.h1`
  font-family: 'Exo', sans-serif;
  font-size: 2.5rem;
  font-weight: 100;
  letter-spacing: 1px;
  margin-bottom: -10px;
`;

export const Subtitle = styled.h4`
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  text-transform: lowercase;
`;

export const Line = styled.hr`
  width: 34px;
  border: 0.5px solid ${({ theme: { colors } }) => colors.textMain};
  margin: 0.5em 0;
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 2.5em;
`;

export const ListItem = styled.li`
  font-size: 0.75rem;
`;

export const ListText = styled.p`
  font-size: 18px;
`;

export const Subtle = styled.p`
  font-size: 16px;
  font-weight: 300;
  max-width: 60ch;
  margin-bottom: 0.75em;
`;
