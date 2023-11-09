import CustomWeb3Modal from "components/CustomWeb3Modal/CustomWeb3Modal";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ModalProvider from "./ModalProvider";
import ThemeProvider from "./ThemeProvider";
import WagmiProvider from "./WagmiProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <WagmiProvider>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>{children}</ModalProvider>
        </QueryClientProvider>
      </WagmiProvider>

      <CustomWeb3Modal />
    </ThemeProvider>
  );
};

export default Providers;
