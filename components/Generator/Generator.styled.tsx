import styled from "styled-components";

export const FrameWrapper = styled.div<{ $aspectRatio?: number }>`
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  ${({ $aspectRatio }) => $aspectRatio && `aspect-ratio: ${$aspectRatio};`}

  iframe {
    border: none;

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
