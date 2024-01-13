import { clsx } from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

const Tab = ({ active, children, ...props }: Props) => {
  return (
    <a
      className={clsx(
        "cursor-pointer border-b-2 px-4 pb-2 text-center font-sans text-2xl font-light italic transition-all hover:text-hover-light dark:hover:text-hover-dark max-sm:px-1 max-sm:pb-1 max-sm:text-sm",
        {
          "border-black dark:border-white": active,
          "border-transparent": !active,
        },
      )}
      role="tab"
      {...props}
    >
      {children}
    </a>
  );
};

export default Tab;
