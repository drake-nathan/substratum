import React from "react";
import { PuffLoader } from "react-spinners";
import { useTheme } from "styled-components";

import * as St from "./Modals.styled";

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

  if (error) return <St.Error>{error}</St.Error>;

  if (loading) return <PuffLoader color={colors.textMain} />;

  return (
    <St.Button onClick={handleClick}>
      <h4>Proceed</h4>
    </St.Button>
  );
};

export default ActionArea;
