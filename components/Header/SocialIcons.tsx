import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiDiscord } from "react-icons/si";

const SocialIcons = (): React.JSX.Element => (
  <div className="mr-6 flex items-center gap-2">
    <a href="https://twitter.com/MonkMatto" rel="noreferrer" target="_blank">
      <FaTwitter className="hover:text-hover-light dark:hover:text-hover-dark" />
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
