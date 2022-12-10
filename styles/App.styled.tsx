import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 0.5em;
  padding-bottom: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
`;
