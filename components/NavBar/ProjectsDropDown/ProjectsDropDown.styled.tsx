import styled from 'styled-components';

type ShowDropDown = { showDropDown: boolean };

export const ContainerUl = styled.ul<ShowDropDown>`
  position: absolute;
  top: 31.5px;
  left: 0;
  width: 100%;
  min-width: 200px;
  height: ${({ showDropDown }) => (showDropDown ? '120px' : '0px')};
  background-color: ${({ theme: { colors } }) => colors.textMain};
  transition: all 0.3s ease;
  overflow: ${({ showDropDown }) => (showDropDown ? 'auto' : 'hidden')};
  padding: ${({ showDropDown }) =>
    showDropDown ? '0.75em 0.5em 0.5em 1.5em' : '0 0.5em'};
  overflow-y: hidden;
`;

export const ProjectLi = styled.li`
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

export const MobileContainer = styled.ul`
  list-style: none;
  border: 1px solid white;
  padding: 1em 3em;
`;
