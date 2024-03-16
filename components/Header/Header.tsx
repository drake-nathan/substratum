import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Substratum from "public/substratum/substratum.svg";
import React, { useState } from "react";
import { CgSun } from "react-icons/cg";
import { MdOutlineDarkMode } from "react-icons/md";

import ConnectButton from "./ConnectButton";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";
import { useTheme } from "contexts/ThemeProvider";

const Header = (): React.JSX.Element => {
  const { isDark, isMobile, isMobileNav, setTheme, theme } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const iconSize = !isMobile ? 80 : 42;

  return (
    <header className="flex w-full items-center gap-4 border-b border-black dark:border-white md:justify-between md:gap-8 md:border-b-3">
      <Link href="/">
        <div className="flex size-12 items-center justify-center border-r border-white bg-black md:size-[90px]">
          <Substratum height={iconSize} width={iconSize} />
        </div>
      </Link>

      {!isMobileNav ?
        <>
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <h1 className="">substratum</h1>
            </Link>

            <NavLinks setShowMobileNav={setShowMobileNav} />

            <SocialIcons />
          </div>

          <button
            className="hover:text-hover-light dark:hover:text-hover-dark"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {!isDark ?
              <MdOutlineDarkMode className="text-xl" />
            : <CgSun className="text-xl" />}
          </button>

          <ConnectButton />
        </>
      : <>
          <Link href="/">
            <h1 className="flex w-full items-center justify-between text-2xl">
              substratum
            </h1>
          </Link>

          <div className="ml-auto mr-1">
            <Hamburger
              color={isDark ? "#fffcf9" : "#0f0f0f"}
              label="Show menu"
              size={isMobile ? 20 : 36}
              toggle={setShowMobileNav}
              toggled={showMobileNav}
            />
          </div>

          <MobileNav isOpen={showMobileNav} setIsOpen={setShowMobileNav} />
        </>
      }
    </header>
  );
};

export default Header;
