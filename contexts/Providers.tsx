import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
