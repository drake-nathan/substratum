import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from './NavLinks/NavLinks';
import MobileNav from './MobileNav';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  useEagerConnect();
  const { active } = useWeb3React();
  const { isMobile } = useContext(ThemeContext);

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <St.NavContainer>
      <St.LogoDiv>
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
      </St.LogoDiv>
      {!isMobile ? (
        <St.SocialsAndLinks>
          <SocialIcons />

          <NavLinks active={active} setShowMobileNav={setShowMobileNav} />
        </St.SocialsAndLinks>
      ) : (
        <>
          <Hamburger color="#3A3A3A" toggle={setShowMobileNav} toggled={showMobileNav} />

          <MobileNav isOpen={showMobileNav} setIsOpen={setShowMobileNav} />
        </>
      )}
    </St.NavContainer>
  );
};

export default NavBar;
