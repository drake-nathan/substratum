import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 7em 1em;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 200;
  letter-spacing: 2px;
  margin-bottom: -4px;
`;

export const Subtitle = styled.h2`
  font-style: italic;
  font-weight: 300;
  margin-bottom: 2px;
`;

export const List = styled.ul`
  margin-left: 0.75em;
  margin-bottom: 2.5em;
`;

export const ListItem = styled.li`
  font-size: 0.75rem;
`;

export const ListText = styled.span`
  font-size: 1rem;
`;

export const Subtle = styled.span`
  font-size: 0.875em;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 0.75em;
`;
