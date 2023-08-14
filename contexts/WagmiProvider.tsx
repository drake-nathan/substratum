import React from 'react';
import { wagmiConfig } from 'services/wagmi';
import { WagmiConfig } from 'wagmi';

interface Props {
  children: React.ReactNode;
}

const WagmiProvider = ({ children }: Props): JSX.Element => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};

export default WagmiProvider;
