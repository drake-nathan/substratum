import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme.isMobile ? '3em' : '1.5em')};

  .icon {
    font-size: ${({ theme }) => (theme.isMobile ? '2rem' : '1.375rem')};
    color: ${(props) => props.theme.colors.textMain};
    vertical-align: bottom;

    :hover {
      color: ${(props) => props.theme.colors.teal};
      cursor: pointer;
    }
  }
`;

export const TwitterIcon = styled(FaTwitter)``;

export const DiscordIcon = styled(SiDiscord)``;

export const YoutubeIcon = styled(IoLogoYoutube)``;
