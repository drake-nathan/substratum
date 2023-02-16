import styled from 'styled-components';

export const Container = styled.div`
  --card-size: 275px;
  height: var(--card-size);
  width: var(--card-size);
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type Props = { isShown: boolean };

export const Overlay = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0);
  opacity: ${({ isShown }) => (isShown ? 0.7 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const OverlayText = styled.h2<Props>`
  position: absolute;
  opacity: ${({ isShown }) => (isShown ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
