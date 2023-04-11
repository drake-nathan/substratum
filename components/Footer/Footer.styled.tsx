import styled from 'styled-components';
import { MdCopyright } from 'react-icons/md';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  margin-top: 4em;
`;

export const LineOne = styled.hr`
  border: 0.25px solid ${({ theme: { colors } }) => colors.hover};
  margin-bottom: 8px;
`;

export const LineTwo = styled.hr`
  border: 0.5px solid ${({ theme: { colors } }) => colors.textMain};
  margin-bottom: 5px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
  min-height: 100px;
  background-color: #0f0f0f;
  color: #fffcf9;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const SmallText = styled.p`
  font-size: 14px;
`;

export const Link = styled.a`
  font-family: 'basic-sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`;

export const CopyrightIcon = styled(MdCopyright)``;
