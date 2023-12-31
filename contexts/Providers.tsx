import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React from "react";

import ModalProvider from "./ModalProvider";
import ThemeProvider from "./ThemeProvider";

const Web3Modal = dynamic(
  () => import("../components/CustomWeb3Modal/CustomWeb3Modal"),
  { ssr: false },
);

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <Web3Modal>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>{children}</ModalProvider>
        </QueryClientProvider>
      </Web3Modal>
    </ThemeProvider>
  );
};

export default Providers;
