import React from "react";
import { BarLoader } from "react-spinners";
import { useTheme } from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
}

const Loader = ({ children, loading }: Props): React.JSX.Element => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-4">
      <h1 className="">{children}</h1>

      {loading && (
        <BarLoader
          className="text-white"
          color={colors.textMain}
          height={8}
          width={300}
        />
      )}
    </div>
  );
};

export default Loader;
