import { createWeb3Modal, useWeb3ModalTheme } from "@web3modal/wagmi/react";
import React, { useEffect } from "react";
import { WagmiProvider } from "wagmi";

import { useTheme } from "contexts/ThemeProvider";
import { wagmiConfig } from "services/wagmi";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_W3M_PROJECT_ID");
}

createWeb3Modal({
  enableAnalytics: true,
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

  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
};

export default Web3Modal;
