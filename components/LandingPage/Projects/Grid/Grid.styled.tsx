import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5em;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid ${({ theme: { colors } }) => colors.textMain};
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  padding: 0 90px;
  margin-top: 2em;
`;
