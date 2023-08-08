import styled from 'styled-components';

export const Form = styled.form`
  flex: 0 1 100%;
  min-width: 200px;
  height: 100%;
  margin-left: 15px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    width: 150px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: unset;
  padding: 0.5em;
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: left;
  outline: none;

  &:hover {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (max-width: 800px) {
    padding: 0.25em;
  }
`;

export const ErrorText = styled.span`
  font-size: 1em;
`;
