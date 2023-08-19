import styled from 'styled-components';

export const Container = styled.div`
  --card-size: 400px;

  /* width: var(--card-size); */
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme: { colors } }) => colors.textMain};

  &:hover {
    cursor: pointer;
  }
`;

export const ImgSection = styled.div`
  /* height: var(--card-size); */
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;

  // if not mobile, zoom image on hover
  // NOTE: The reason this is awkward is because the hover CSS is only applied if the cursor as hovered, once it's out, the transition CSS is gone.
  /* @media (min-width: 768px) {
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  } */
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ProjectTitle = styled.h4`
  width: 100%;
`;

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
  background-color: #0f0f0f;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusText = styled.p`
  font-family: 'transducer', sans-serif;
  font-size: 15px;
  color: #fffcf9;
`;
