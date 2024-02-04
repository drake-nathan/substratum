import { RxOpenInNewWindow } from "react-icons/rx";
import styled from "styled-components";

type ShowDropDown = { $showDropDown: boolean };

export const Container = styled.div<ShowDropDown>`
  position: absolute;
  z-index: 40;
  top: 31.5px;
  left: 0;
  min-width: 230px;
  height: ${({ $showDropDown }) => ($showDropDown ? "210px" : "0px")};
  background-color: ${({ theme: { colors } }) => colors.bgMain};
  transition: all 0.3s ease;
  overflow: ${({ $showDropDown }) => ($showDropDown ? "auto" : "hidden")};
  padding: ${({ $showDropDown }) =>
    $showDropDown ? "0.75em 1.25em 0.5em 1.25em" : "0 0.5em"};
  overflow-y: hidden;
  ${({ $showDropDown, theme }) =>
    $showDropDown && `outline: 1px solid ${theme.colors.textMain};`}
`;

export const ContainerArtists = styled(Container)`
  left: auto;
  right: 0;
  height: ${({ $showDropDown }) => ($showDropDown ? "75px" : "0px")};
  min-width: 250px;
`;

export const Project = styled.div`
  font-weight: 600;
  letter-spacing: normal;

  @media (max-width: 775px) {
    font-size: 1.375rem;
    margin: 0.5em 0;
  }

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

export const MobileContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textMain};
  padding: 1em 3em;
`;

export const RowLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25em;

  @media (max-width: 768px) {
    margin-top: -0.25em;
  }
`;

export const OpenInNewIcon = styled(RxOpenInNewWindow)`
  font-weight: 500;
`;
