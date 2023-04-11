import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  .loading {
    display: block;
  }
`;

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background-color: #f0ede98b;
  top: 0;
  display: none;
`;

export const LoadingCircle = styled.div`
  ::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 20px #f0ede9;
    border-bottom-color: #101010;
    border-radius: 50%;
    content: '';
    height: 80px;
    width: 80px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;

    @media (max-width: 800px) {
      top: 80%;
    }
  }
`;

export const PngImage = styled.img`
  width: 100%;
  height: 100%;
`;
