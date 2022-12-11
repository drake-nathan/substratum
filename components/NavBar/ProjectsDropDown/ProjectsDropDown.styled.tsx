import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%; */
  min-width: 200px;
  height: 150px;
  background-color: ${({ theme: { colors } }) => colors.hover};
`;
