import { IoLogoYoutube } from "react-icons/io";
import { RiBlueskyFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";

const SocialIcons = (): React.JSX.Element => (
  <div className="mr-6 flex items-center gap-2">
    <a
      href="https://bsky.app/profile/matto.bsky.social"
      rel="noreferrer"
      target="_blank"
    >
      <RiBlueskyFill className="hover:text-hover-light dark:hover:text-hover-dark" />
    </a>
    <a
      href="https://discord.com/invite/AQDwjAa3g2"
      rel="noreferrer"
      target="_blank"
    >
      <SiDiscord className="hover:text-hover-light dark:hover:text-hover-dark" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
      rel="noreferrer"
      target="_blank"
    >
      <IoLogoYoutube className="hover:text-hover-light dark:hover:text-hover-dark" />
    </a>
  </div>
);

export default SocialIcons;
