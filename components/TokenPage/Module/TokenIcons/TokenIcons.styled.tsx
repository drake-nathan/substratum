import { BsArrowsFullscreen } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";
import styled from "styled-components";

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5em;

  .icon {
    font-size: 19px;
    display: block;
  }

  .mobile {
    font-size: 1.5rem;
  }

  @media (max-width: 650px) {
    justify-content: space-between;
  }
`;

export const FullScreenIcon = styled(BsArrowsFullscreen)``;

export const MobileIcon = styled(MdMobileFriendly)``;
