import { createWeb3Modal, useWeb3ModalTheme } from "@web3modal/wagmi/react";
import React, { useEffect } from "react";
import { chains, wagmiConfig } from "services/wagmi";
import { useTheme } from "styled-components";
import { WagmiConfig } from "wagmi";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_W3M_PROJECT_ID");
}

createWeb3Modal({
  chains,
  projectId,
  wagmiConfig,
});

const Web3Modal = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { isDark } = useTheme();
  const { setThemeMode } = useWeb3ModalTheme();

  const themeMode = isDark ? "dark" : "light";

  useEffect(() => {
    setThemeMode(themeMode);
  }, [setThemeMode, themeMode]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  return <WagmiConfig config={wagmiConfig as any}>{children}</WagmiConfig>;
};

export default Web3Modal;
