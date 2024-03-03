import { CgSortAz, CgSortZa } from "react-icons/cg";
import { styled } from "styled-components";

export const SortDiv = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.75em;
  margin-right: 15px;

  .inactive {
    font-weight: 300;
  }

  .icon {
    font-size: 2.125rem;
    cursor: pointer;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 800px) {
    gap: 0.2em;
  }
`;

export const Title = styled.h2`
  margin-bottom: 0.5em;
`;

export const Stat = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
`;

export const SubtleText = styled.span`
  font-style: normal;
  font-weight: inherit;
  margin-left: 2px;
  color: #00000079;
  font-weight: 600;
`;

export const TextButton = styled.span`
  cursor: pointer;
  color: #00000079;
  font-weight: 600;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const SortButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em;
  color: #00000079;
  font-weight: 600;

  &:hover {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const SortIconAsc = styled(CgSortZa)`
  font-weight: 300;
`;

export const SortIconDesc = styled(CgSortAz)`
  font-weight: 300;
`;
