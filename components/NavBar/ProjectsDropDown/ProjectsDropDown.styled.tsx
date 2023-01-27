import styled from 'styled-components';
import { RxOpenInNewWindow } from 'react-icons/rx';

type ShowDropDown = { showDropDown: boolean };

export const Container = styled.div<ShowDropDown>`
  position: absolute;
  top: 31.5px;
  left: 0;
  width: 100%;
  min-width: 200px;
  height: ${({ showDropDown }) => (showDropDown ? '170px' : '0px')};
  background-color: ${({ theme: { colors } }) => colors.textMain};
  transition: all 0.3s ease;
  overflow: ${({ showDropDown }) => (showDropDown ? 'auto' : 'hidden')};
  padding: ${({ showDropDown }) =>
    showDropDown ? '0.75em 0.5em 0.5em 1.25em' : '0 0.5em'};
  overflow-y: hidden;
`;

export const Project = styled.div`
  color: ${({ theme: { isMobile, colors } }) =>
    !isMobile ? colors.bgMain : colors.textMain};
  font-weight: 600;
  letter-spacing: normal;

  @media (max-width: 775px) {
    font-size: 1.375rem;
    margin: 0.25em 0;
  }

  :hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

export const MobileContainer = styled.div`
  border: 1px solid white;
  padding: 1em 3em;
`;

export const RowLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25em;
`;

export const OpenInNewIcon = styled(RxOpenInNewWindow)`
  color: ${({ theme: { isMobile, colors } }) =>
    !isMobile ? colors.bgMain : colors.textMain};
  font-weight: 500;
`;
