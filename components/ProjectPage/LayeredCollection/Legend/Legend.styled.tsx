import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const Container = styled.div`
  grid-column: span 2;

  .hide {
    max-height: 0;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const LegendGrid = styled.div`
  display: grid;
  width: 100%;
  margin: 1em 0 2em;
  gap: 1em;
  grid-template-areas:
    "top top cut cut faro faro"
    "overhand overhand wash wash reverse reverse";
  transition: all 0.3s ease;
  overflow: hidden;
  max-height: 100%;

  @media (max-width: 1200px) {
    grid-template-areas:
      "top top top cut cut cut"
      "faro faro faro overhand overhand overhand"
      "wash wash wash reverse reverse reverse";
  }

  @media (max-width: 800px) {
    grid-template-areas:
      "top top top top top top"
      "cut cut cut cut cut cut"
      "faro faro faro faro faro faro"
      "overhand overhand overhand overhand overhand overhand"
      "wash wash wash wash wash wash"
      "reverse reverse reverse reverse reverse reverse";
  }
`;

export const LegendHeader = styled.h3`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textMain};
  padding-bottom: 0.1em;

  .rotated {
    transform: rotate(135deg);
  }
`;

export const ExpandSectionIcon = styled(FaPlus)`
  font-size: 26px;
  padding: 2px;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.textMain};
  transition-duration: 0.8s;
`;

export const Top = styled.div`
  grid-area: top;
`;

export const Faro = styled.div`
  grid-area: faro;
`;

export const Cut = styled.div`
  grid-area: cut;
`;

export const Overhand = styled.div`
  grid-area: overhand;
`;

export const Wash = styled.div`
  grid-area: wash;
`;

export const Reverse = styled.div`
  grid-area: reverse;
`;

export const ActionTitle = styled.div`
  cursor: pointer;
  border: 2px solid ${({ theme: { colors } }) => colors.textMain};
  background-color: ${({ theme: { colors } }) => colors.bgMain};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: "basic-sans", sans-serif;
`;

export const InfoDropdown = styled.div`
  background-color: ${({ theme: { colors } }) => colors.textMain};
  display: flex;
  flex-direction: column;
  max-height: 80%;
  gap: 1em;
  padding: 1em;
  overflow: hidden;
  /* transition: padding 0.2s ease-in-out; */
  transition: all 0.3s, padding-top 0.3s;
  transition-timing-function: ease;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.bgMain};
`;

export const PriceInfo = styled.p`
  font-size: initial;
  font-family: "basic-sans", sans-serif;
  color: ${({ theme: { colors } }) => colors.hover};
`;

export const ExpandWrapper = styled.span`
  border-radius: 1em;
  padding: 0.5em;
  font-size: 16px;
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.textMain};

  .rotated {
    transform: rotate(135deg);
  }
`;

export const ExpandKeyIcon = styled(FaPlus)`
  color: ${({ theme: { colors } }) => colors.bgMain};

  transition-duration: 0.5s;
`;
