import { CgSun } from "react-icons/cg";
import { MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components";

export const OuterContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ theme: { isMobile } }) => !isMobile && "justify-content: space-between;"}
  gap: ${({ theme: { isMobile } }) => (isMobile ? "1em" : "2em")};
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.textMain};
  ${({ theme: { isMobile } }) => isMobile && "border-width: 1px;"}
`;

export const LogoDiv = styled.div`
  --size: ${({ theme: { isMobile } }) => (isMobile ? "48px" : "90px")};
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;
  border-right: 1px solid #fffcf9;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  ${({ theme: { isMobile } }) => isMobile && "font-size: 24px;"};

  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerDiv = styled.div`
  margin-left: auto;
  margin-right: 0.25em;
`;

export const DarkModeButton = styled.div`
  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.hover};
  }

  .icon {
    font-size: 1.25rem;
  }
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)``;

export const LightModeIcon = styled(CgSun)``;
