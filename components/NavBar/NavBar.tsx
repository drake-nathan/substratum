import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from './NavLinks/NavLinks';
import MobileNav from './MobileNav';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  const { isMobile } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <St.NavContainer>
      <St.LeftSection>
        <Image
          src={'/substratum/substratum.png'}
          height={35}
          width={35}
          alt="substratum logo"
        />

        <St.TitleDiv>
          <Link href="/">
            <St.NavTitle>substratum</St.NavTitle>
          </Link>
        </St.TitleDiv>
      </St.LeftSection>

      {!isMobile ? (
        <St.RightSection>
          <SocialIcons />

          <NavLinks setShowMobileNav={setShowMobileNav} />
        </St.RightSection>
      ) : (
        <>
          <Hamburger
            color="#f4f4f4"
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
