import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: ${({ theme: { colors } }) => colors.bgOffset};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75em 3em;
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.bgMain};
  box-shadow: inset 0px 2px 10px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`;
