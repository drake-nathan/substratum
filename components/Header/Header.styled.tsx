import styled from 'styled-components';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CgSun } from 'react-icons/cg';

export const OuterContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ theme: { isMobile } }) => !isMobile && 'justify-content: space-between;'}
  gap: ${({ theme: { isMobile } }) => (isMobile ? '1em' : '2em')};
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.textMain};

  // imported hover effect
  .hvr-underline-from-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }

  .hvr-underline-from-right:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 100%;
    right: 0;
    bottom: 0;
    background: ${({ theme: { colors } }) => colors.bgMain};
    height: 4px;
    -webkit-transition-property: left;
    transition-property: left;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .hvr-underline-from-right:hover:before,
  .hvr-underline-from-right:focus:before,
  .hvr-underline-from-right:active:before {
    left: 0;
  }
`;

export const LogoDiv = styled.div`
  --size: ${({ theme: { isMobile } }) => (isMobile ? '50px' : '90px')};
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.textMain};
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  ${({ theme: { isMobile } }) => isMobile && 'font-size: 22px;'};

  :hover {
    cursor: pointer;
  }
`;

export const ConnectButton = styled.button`
  height: 90px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;
  color: #fffcf9;
`;

export const ButtonText = styled.h3``;

export const HamburgerDiv = styled.div`
  margin-left: auto;
  margin-right: 0.25em;
`;

export const DarkModeButton = styled.button`
  .icon {
    font-size: 2rem;
  }
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)``;

export const LightModeIcon = styled(CgSun)``;
