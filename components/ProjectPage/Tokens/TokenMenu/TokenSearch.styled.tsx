import styled from 'styled-components';

export const Form = styled.form`
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  max-width: 95%; */

  width: 33%;
  margin-left: 15px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    width: 150px;
  }
`;

export const Input = styled.input`
  /* height: 40px; */
  /* width: 300px; */
  width: 100%;
  background-color: transparent;
  border: unset;
  padding: 0.5em;
  /* border: 3px solid ${(props) => props.theme.colors.textMain}; */
  /* border-radius: ${(props) => props.theme.borderRadius}; */
  text-align: left;
  outline: none;

  :focus::placeholder {
    color: transparent;
  }

  :hover {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (max-width: 800px) {
  }
`;

export const ErrorText = styled.span`
  font-size: 1em;
`;
