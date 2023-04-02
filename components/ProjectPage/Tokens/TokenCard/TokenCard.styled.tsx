import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0 0 2px 2px;
  border: 1px solid ${(props) => props.theme.colors.textMain};
  transition-duration: 400ms;

  :hover {
    transform: scale(1.04);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5em;
  padding: 1em;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
`;

export const Title = styled.h4`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.textMain};
  cursor: pointer;
`;

export const Owner = styled.div`
  font-style: italic;
  font-family: 'basic-sans', sans-serif;
  font-weight: 300;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
