import styled from 'styled-components';

type ShowDropDown = { showDropDown: boolean };

export const Container = styled.ul<ShowDropDown>`
  position: absolute;
  top: 31.5px;
  left: 0;
  width: 100%;
  min-width: 200px;
  height: ${({ showDropDown }) => (showDropDown ? '120px' : '0px')};
  background-color: ${({ theme: { colors } }) => colors.textMain};
  overflow: ${({ showDropDown }) => (showDropDown ? 'auto' : 'hidden')};
  /* transition: all 0.3s ease;
  display: grid; */
  /* grid-template-columns: repeat(2, 1fr);
  gap: 0.5em; */
  padding: ${({ showDropDown }) =>
    showDropDown ? '0.75em 0.5em 0.5em 1.5em' : '0 0.5em'};
  overflow-y: hidden;
`;

export const Project = styled.li`
  color: ${({ theme: { colors } }) => colors.bgMain};
  font-weight: 600;
  letter-spacing: normal;

  :hover {
    font-weight: 700;
    cursor: pointer;
  }
`;
