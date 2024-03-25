import React from "react";
import { PuffLoader } from "react-spinners";

import Button from "components/Button";
import { useTheme } from "contexts/ThemeProvider";

interface Props {
  error: string | undefined;
  handleClick: () => void;
  loading: boolean;
}

const ActionArea = ({
  error,
  handleClick,
  loading,
}: Props): React.JSX.Element => {
  const { isDark } = useTheme();

  if (error)
    return (
      <p className="max-w-[30ch] text-center font-semibold underline">
        {error}
      </p>
    );

  if (loading) return <PuffLoader color={isDark ? "#fffcf9" : "#0f0f0f"} />;

  return (
    <Button onClick={handleClick}>
      <h4>Proceed</h4>
    </Button>
  );
};

export default ActionArea;
