import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  justify-content: space-between;
  padding: 0 1.5em;
  ${({ theme }) => !theme.isMobile && 'min-height: 100px;'}

  h5 {
    color: ${(props) => props.theme.colors.textOffset};
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 0.5em;
  background-color: #17c1ad;
  border: 3px solid #2d1961;
  padding: 2px 5px 0px 8px;
`;

export const NavTitle = styled.h1`
  font-family: 'BustinJieber';
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: 2px;
  transform: scale(1, 1.1);
  color: #2d1961;

  :hover {
    cursor: pointer;
  }
`;
