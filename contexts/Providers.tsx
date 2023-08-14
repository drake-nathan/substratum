import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './ThemeProvider';
import WagmiProvider from './WagmiProvider';
import CustomWeb3Modal from 'components/CustomWeb3Modal/CustomWeb3Modal';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <WagmiProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>

      <CustomWeb3Modal />
    </ThemeProvider>
  );
};

export default Providers;
