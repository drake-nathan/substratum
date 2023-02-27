import * as St from './Header.styled';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from './NavLinks/NavLinks';
import MobileNav from './MobileNav/MobileNav';
import Substratum from 'public/substratum/substratum.svg';

const Header = (): JSX.Element => {
  const { isMobile, colors, isDark, toggleTheme } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const iconSize = !isMobile ? 80 : 42;

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
          </St.InnerContainer>

          <St.DarkModeButton onClick={toggleTheme}>
            {!isDark ? (
              <St.DarkModeIcon className="icon" />
            ) : (
              <St.LightModeIcon className="icon" />
            )}
          </St.DarkModeButton>

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
              size={20}
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
