import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import * as St from "./MobileNav.styled";
import ConnectButton from "../Connect/ConnectButton";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<Props> = ({ isOpen, setIsOpen }) => (
  <St.Container $isOpen={isOpen}>
    <ConnectButton />

    <NavLinks setShowMobileNav={setIsOpen} />

    <SocialIcons />
  </St.Container>
);

export default MobileNav;
