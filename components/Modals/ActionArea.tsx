import Button from "components/Button";
import React from "react";
import { PuffLoader } from "react-spinners";
import { useTheme } from "styled-components";

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
  const { colors } = useTheme();

  if (error)
    return (
      <p className="max-w-[30ch] text-center font-semibold underline">
        {error}
      </p>
    );

  if (loading) return <PuffLoader color={colors.textMain} />;

  return (
    <Button onClick={handleClick}>
      <h4>Proceed</h4>
    </Button>
  );
};

export default ActionArea;
