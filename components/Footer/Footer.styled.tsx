import styled from 'styled-components';
import { MdCopyright } from 'react-icons/md';

export const Container = styled.footer`
  /* position: absolute;
  bottom: 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: 4em 1em 2em;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
`;

export const Text = styled.span`
  font-size: 0.75em;
  font-style: italic;
`;

export const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;
`;

export const CopyrightIcon = styled(MdCopyright)``;
