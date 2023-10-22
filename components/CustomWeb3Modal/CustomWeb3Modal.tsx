import { Web3Modal } from "@web3modal/react";
import React from "react";
import { web3ModalClient } from "services/wagmi";
import { useTheme } from "styled-components";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_W3M_PROJECT_ID");
}

const CustomWeb3Modal = (): JSX.Element => {
  const { colors, isDark } = useTheme();

  const themeMode = isDark ? "dark" : "light";
  const themeVariables = {
    "--w3m-background-color": isDark ? colors.hover : colors.textMain,
    "--w3m-accent-color": isDark ? colors.hover : colors.textMain,
    "--w3m-accent-fill-color": isDark ? colors.textMain : colors.bgMain,
  };

  return (
    <Web3Modal
      projectId={projectId}
      ethereumClient={web3ModalClient}
      themeMode={themeMode}
      themeVariables={themeVariables}
    />
  );
};

export default CustomWeb3Modal;
