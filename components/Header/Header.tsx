import * as St from './Header.styled';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from './NavLinks/NavLinks';
import MobileNav from './MobileNav/MobileNav';
import Substratum from 'public/substratum/substratum.svg';

const Header = (): JSX.Element => {
  const { isMobile, colors, currentTheme, toggleTheme } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const iconSize = !isMobile ? 80 : 45;

  return (
    <St.OuterContainer>
      <Link href="/">
        <St.LogoDiv>
          <Substratum width={iconSize} height={iconSize} />
        </St.LogoDiv>
      </Link>

      {!isMobile ? (
        <>
          <St.InnerContainer>
            <Link href="/">
              <St.Title>substratum</St.Title>
            </Link>

            <NavLinks setShowMobileNav={setShowMobileNav} />

            <SocialIcons />

            {/* <St.DarkModeButton onClick={toggleTheme}>
              {currentTheme === 'light' ? (
                <St.DarkModeIcon className="icon" />
              ) : (
                <St.LightModeIcon className="icon" />
              )}
            </St.DarkModeButton> */}
          </St.InnerContainer>

          <St.ConnectButton className="hvr-underline-from-right">
            <St.ButtonText>Connect</St.ButtonText>
          </St.ConnectButton>
        </>
      ) : (
        <>
          <Link href="/">
            <St.Title>substratum</St.Title>
          </Link>

          <St.HamburgerDiv>
            <Hamburger
              color={colors.textMain}
              size={22}
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
