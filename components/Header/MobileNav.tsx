import { clsx } from "clsx";
import React from "react";

import type { SetState } from "utils/types";

import ConnectButton from "./ConnectButton";
import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";

interface Props {
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
}

const MobileNav = ({ isOpen, setIsOpen }: Props): React.JSX.Element => (
  <div
    className={clsx(
      "fixed right-0 top-[90px] z-50 flex h-[calc(100svh-90px)] w-full flex-col items-center justify-between gap-8 bg-white px-8 pb-36 pt-12 shadow-lg delay-200 duration-500 dark:bg-black max-md:top-[49px] max-md:h-[calc(100svh-49px)] max-md:px-4 max-md:pb-24 max-md:pt-8",
      isOpen ? "translate-x-0" : "translate-x-full",
    )}
  >
    <ConnectButton className="border-none" />

    <NavLinks setShowMobileNav={setIsOpen} />

    <SocialIcons />
  </div>
);

export default MobileNav;
