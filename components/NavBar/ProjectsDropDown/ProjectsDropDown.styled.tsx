import styled from 'styled-components';

type ShowDropDown = { showDropDown: boolean };

export const Container = styled.div<ShowDropDown>`
  position: absolute;
  top: 31.5px;
  left: 0;
  width: 100%;
  min-width: 200px;
  height: ${({ showDropDown }) => (showDropDown ? '120px' : '0px')};
  background-color: ${({ theme: { colors } }) => colors.hover};
  overflow: ${({ showDropDown }) => (showDropDown ? 'auto' : 'hidden')};
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  padding: ${({ showDropDown }) => (showDropDown ? '1em 0.5em 0.5em' : '0 0.5em')};
`;

export const Project = styled.span`
  color: ${({ theme: { colors } }) => colors.bgMain};
  font-weight: 600;

  :hover {
    color: ${({ theme: { colors } }) => colors.textOffset};
    cursor: pointer;
  }
`;
