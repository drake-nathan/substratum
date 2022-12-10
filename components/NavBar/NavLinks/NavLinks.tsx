import React from 'react';
import Link from 'next/link';
import * as St from './NavLinks.styled';

interface Props {
  active: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<Props> = ({ active, setShowMobileNav }) => {
  return (
    <St.NavLinksDiv>
      <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
        <St.NavItem onClick={() => setShowMobileNav(false)}>DOCS</St.NavItem>
      </a>

      <St.NavItem
        onClick={() => {
          setShowMobileNav(false);
        }}
      >
        LINKS
      </St.NavItem>

      <St.NavItem
        onClick={() => {
          setShowMobileNav(false);
        }}
      >
        {!active ? 'CONNECT' : 'CONNECTED'}
      </St.NavItem>
    </St.NavLinksDiv>
  );
};

export default NavLinks;
