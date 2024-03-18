import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Substratum from "public/substratum/substratum.svg";
import React, { useState } from "react";

import ConnectButton from "./ConnectButton";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { NavigationMenuDemo } from "./NewNav";
import SocialIcons from "./SocialIcons";
import ThemeToggle from "components/shadcn/ThemeToggle";
import { useTheme } from "contexts/ThemeProvider";

const Header = (): React.JSX.Element => {
  const { isDark } = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="flex w-full items-center border-b border-black dark:border-white md:justify-between md:border-b-3">
      <Link href="/">
        <div className="flex size-12 items-center justify-center border-r border-white bg-black md:size-[90px]">
          <Substratum className="size-[42px] md:size-[80px]" />{" "}
          {/* Adjusted sizes for xl breakpoint */}
        </div>
      </Link>

      {/* Desktop layout */}
      <div className="hidden w-full items-center justify-between xl:flex">
        <div className="flex w-full items-center justify-between px-8">
          <Link href="/">
            <h1>substratum</h1>
          </Link>
          <NavigationMenuDemo />
          {/* <NavLinks setShowMobileNav={setShowMobileNav} /> */}
          <SocialIcons />
          <ThemeToggle />
        </div>

        <ConnectButton />
      </div>

      {/* Mobile layout */}
      <div className="flex w-full items-center justify-between pl-4 xl:hidden">
        <Link href="/">
          <h1 className="text-2xl">substratum</h1>
        </Link>

        <div className="ml-auto mr-1">
          <Hamburger
            color={isDark ? "#fffcf9" : "#0f0f0f"}
            label="Show menu"
            size={20} // You can adjust the size if needed
            toggle={setShowMobileNav}
            toggled={showMobileNav}
          />
        </div>

        <MobileNav isOpen={showMobileNav} setIsOpen={setShowMobileNav} />
      </div>
    </header>
  );
};

export default Header;
