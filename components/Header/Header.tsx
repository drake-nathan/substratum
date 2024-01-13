import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Substratum from "public/substratum/substratum.svg";
import { useState } from "react";
import { CgSun } from "react-icons/cg";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";

import ConnectButton from "./Connect/ConnectButton";
import MobileNav from "./MobileNav/MobileNav";
import NavLinks from "./NavLinks/NavLinks";
import SocialIcons from "./SocialIcons/SocialIcons";

const Header = (): JSX.Element => {
  const { colors, isDark, isMobile, isMobileNav, toggleTheme } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const iconSize = !isMobile ? 80 : 42;

  return (
    <header className="flex w-full items-center gap-4 border-b border-black dark:border-white md:justify-between md:gap-8 md:border-b-[3px]">
      <Link href="/">
        <div className="flex size-12 items-center justify-center border-r-[1px] border-white bg-black md:size-[90px]">
          <Substratum height={iconSize} width={iconSize} />
        </div>
      </Link>

      {!isMobileNav ? (
        <>
          <div className="md- flex w-full items-center justify-between">
            <Link href="/">
              <h1 className="">substratum</h1>
            </Link>

            <NavLinks setShowMobileNav={setShowMobileNav} />

            <SocialIcons />
          </div>

          <button
            className="hover:text-hover-light dark:hover:text-hover-dark"
            onClick={toggleTheme}
          >
            {!isDark ? (
              <MdOutlineDarkMode className="text-xl" />
            ) : (
              <CgSun className="text-xl" />
            )}
          </button>

          <ConnectButton />
        </>
      ) : (
        <>
          <Link href="/">
            <h1 className="md- flex w-full items-center justify-between text-2xl">
              substratum
            </h1>
          </Link>

          <div className="ml-auto mr-1">
            <Hamburger
              color={colors.textMain}
              label="Show menu"
              size={isMobile ? 20 : 36}
              toggle={setShowMobileNav}
              toggled={showMobileNav}
            />
          </div>

          <MobileNav isOpen={showMobileNav} setIsOpen={setShowMobileNav} />
        </>
      )}
    </header>
  );
};

export default Header;
