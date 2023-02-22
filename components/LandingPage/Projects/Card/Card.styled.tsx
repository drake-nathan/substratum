import styled from 'styled-components';

export const Container = styled.div`
  --card-size: 400px;

  width: var(--card-size);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme: { colors } }) => colors.textMain};

  :hover {
    cursor: pointer;
  }
`;

export const ImgSection = styled.div`
  height: var(--card-size);
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  // if not mobile, zoom image on hover
  @media (min-width: 768px) {
    :hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ProjectTitle = styled.h4``;

export const ArtistName = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
`;

export const SupplyText = styled.p`
  font-size: 18px;
  margin-top: 1em;
`;

export const StatusDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 31px;
  width: 104px;
  background-color: ${({ theme: { colors } }) => colors.textMain};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusText = styled.p`
  font-family: 'transducer', sans-serif;
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.bgMain};
`;
