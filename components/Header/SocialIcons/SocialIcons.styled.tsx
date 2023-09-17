import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-right: 1.5em;

  .icon {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textMain};
    vertical-align: middle;

    &:hover {
      color: ${(props) => props.theme.colors.hover};
      cursor: pointer;
    }
  }
`;

export const TwitterIcon = styled(FaTwitter)``;

export const DiscordIcon = styled(SiDiscord)``;

export const YoutubeIcon = styled(IoLogoYoutube)``;
