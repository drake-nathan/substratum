import { clsx } from "clsx";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const Tab = ({
  active,
  children,
  className,
  ...props
}: Props): React.JSX.Element => {
  return (
    <button
      className={clsx(
        "border-b-2 px-4 pb-2 text-center font-sans text-2xl font-light capitalize italic hover:text-hover-light dark:hover:text-hover-dark max-sm:px-2 max-sm:pb-1 max-sm:text-sm",
        active ? "border-black dark:border-white" : "border-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Tab;
