import styled from 'styled-components';

type Props = { height: number; width: number };

export const FrameWrapper = styled.div<Props>`
  iframe {
    border: none;

    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    /* @media (max-width: 1150px) {
      width: 650px;
      height: 650px;
    }
    @media (max-width: 1000px) {
      width: 550px;
      height: 550px;
    }
    @media (max-width: 750px) {
      width: 450px;
      height: 450px;
    }
    @media (max-width: 500px) {
      width: 365px;
      height: 365px;
    } */
  }
`;