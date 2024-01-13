import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="rounded-xs border-3 border-black bg-white px-4 py-2 font-bold text-black transition-all hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
