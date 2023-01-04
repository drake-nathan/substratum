import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  justify-content: space-between;
  padding: 1.5em;

  h5 {
    color: ${(props) => props.theme.colors.textOffset};
  }

  @media (max-width: 550px) {
    padding: 1.5em 0;
    justify-content: space-evenly;
  }

  @media (max-width: 450px) {
    padding: 0.75em 0;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const LogoDiv = styled.div`
  position: relative;
  width: 48px;
  height: 100%;
  aspect-ratio: 1/1;

  @media (max-width: 450px) {
    width: 41px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 0.5em;
  background-color: ${({ theme: { colors } }) => colors.teal};
  border: 3px solid ${({ theme: { colors } }) => colors.purple};
  padding: 3px 5px 0px 8px;
`;

export const NavTitle = styled.h1`
  font-family: 'BustinJieber';
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: 2px;
  transform: scale(1, 1.1);
  color: ${({ theme: { colors } }) => colors.purple};

  :hover {
    cursor: pointer;
  }

  @media (max-width: 450px) {
    font-size: 1.75rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;
