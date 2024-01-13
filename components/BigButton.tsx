import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BigButton = ({ children, ...props }: Props) => {
  return (
    <button
      className="flex w-full items-center justify-center bg-black px-2 py-4 text-3xl font-bold uppercase text-white hover:bg-hover-light dark:bg-white dark:text-black dark:hover:bg-hover-dark"
      {...props}
    >
      {children}
    </button>
  );
};

export default BigButton;
