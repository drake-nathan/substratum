import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from './NavLinks/NavLinks';
import MobileNav from './MobileNav/MobileNav';
import substratumLogo from 'public/substratum/substratum.png';
import { bustinJieber } from 'styles/fonts';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  const { isMobile, colors } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <St.NavContainer>
      <St.TitleSection>
        <St.LogoDiv>
          <Image src={substratumLogo} alt="substratum logo" fill />
        </St.LogoDiv>

        <St.TitleDiv>
          <Link href="/">
            <St.NavTitle className={bustinJieber.className}>substratum</St.NavTitle>
          </Link>
        </St.TitleDiv>
      </St.TitleSection>

      {!isMobile ? (
        <St.RightSection>
          <SocialIcons />

          <NavLinks setShowMobileNav={setShowMobileNav} />
        </St.RightSection>
      ) : (
        <>
          <Hamburger
            color={colors.textMain}
            size={30}
            toggle={setShowMobileNav}
            toggled={showMobileNav}
          />

          <MobileNav isOpen={showMobileNav} setIsOpen={setShowMobileNav} />
        </>
      )}
    </St.NavContainer>
  );
};

export default NavBar;
