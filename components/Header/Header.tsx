import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Substratum from "public/substratum/substratum.svg";
import { useState } from "react";
import { useTheme } from "styled-components";

import ConnectButton from "./Connect/ConnectButton";
import * as St from "./Header.styled";
import MobileNav from "./MobileNav/MobileNav";
import NavLinks from "./NavLinks/NavLinks";
import SocialIcons from "./SocialIcons/SocialIcons";

const Header = (): JSX.Element => {
  const { isMobileNav, isMobile, colors, isDark, toggleTheme } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const iconSize = !isMobile ? 80 : 42;

  return (
    <St.OuterContainer>
      <Link href="/">
        <St.LogoDiv>
          <Substratum width={iconSize} height={iconSize} />
        </St.LogoDiv>
      </Link>

      {!isMobileNav ? (
        <>
          <St.InnerContainer>
            <Link href="/">
              <St.Title>substratum</St.Title>
            </Link>

            <NavLinks setShowMobileNav={setShowMobileNav} />

            <SocialIcons />
          </St.InnerContainer>

          <St.DarkModeButton onClick={toggleTheme}>
            {!isDark ? (
              <St.DarkModeIcon className="icon" />
            ) : (
              <St.LightModeIcon className="icon" />
            )}
          </St.DarkModeButton>

          <ConnectButton />
        </>
      ) : (
        <>
          <Link href="/">
            <St.Title>substratum</St.Title>
          </Link>

          <St.HamburgerDiv>
            <Hamburger
              color={colors.textMain}
              size={isMobile ? 20 : 36}
              toggle={setShowMobileNav}
              toggled={showMobileNav}
              label="Show menu"
            />
          </St.HamburgerDiv>

          <MobileNav isOpen={showMobileNav} setIsOpen={setShowMobileNav} />
        </>
      )}
    </St.OuterContainer>
  );
};

export default Header;
