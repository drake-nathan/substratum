import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Substratum from "public/substratum/substratum.svg";
import { useTheme } from "styled-components";

import ConnectButton from "../ConnectButton";
import NavLinks from "../NavLinks/NavLinks";
import SocialIcons from "../SocialIcons";
import * as St from "./MobileNav.styled";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { colors, isMobile } = useTheme();
  const iconSize = !isMobile ? 80 : 42;

  return (
    <St.Container $isOpen={isOpen}>
      <St.TopRow>
        <St.LogoRow>
          <Link href="/">
            <div className="flex size-12 items-center justify-center border-r-[1px] border-white bg-black md:size-[90px]">
              <Substratum height={iconSize} width={iconSize} />
            </div>
          </Link>
          <Link href="/">
            <h1 className="flex w-full items-center justify-between text-2xl">
              substratum
            </h1>
          </Link>
        </St.LogoRow>
        <Hamburger
          color={colors.textMain}
          label="Show menu"
          size={isMobile ? 20 : 36}
          toggle={setIsOpen}
          toggled={isOpen}
        />
      </St.TopRow>
      <ConnectButton />
      <St.NavLinkContainer>
        <NavLinks setShowMobileNav={setIsOpen} />
      </St.NavLinkContainer>
      <SocialIcons />
    </St.Container>
  );
};

export default MobileNav;
