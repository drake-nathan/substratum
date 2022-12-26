import styled from 'styled-components';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { MdMobileFriendly } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    font-size: 1.25rem;

    :hover {
      cursor: pointer;
      color: ${({ theme: { colors } }) => colors.hover};
    }
  }

  .mobile {
    font-size: 1.5rem;
  }
`;

export const TokenId = styled.h2`
  font-weight: 400;
  letter-spacing: 2px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const FullScreenIcon = styled(BsArrowsFullscreen)``;

export const MobileIcon = styled(MdMobileFriendly)``;
