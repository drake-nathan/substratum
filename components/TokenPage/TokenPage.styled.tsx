import styled from 'styled-components';
import { IoReturnUpBackSharp } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin-top: 2em;
  gap: 1.5em;

  @media (max-width: 1000px) {
    width: min-content;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 4px;

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.teal};
  }
`;

export const BackDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.teal};
  }
`;

export const BackText = styled.h4`
  font-weight: 500;
`;

export const BackIcon = styled(IoReturnUpBackSharp)`
  font-size: 1.75rem;
`;
