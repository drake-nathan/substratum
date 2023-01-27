import { useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useWindowSize } from 'hooks/useWindowSize';
import { theme } from '../styles/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useWindowSize();

  const [isMiniCard, setIsMiniCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowWidth < 650 && windowWidth > 390) setIsMiniCard(true);
    else setIsMiniCard(false);

    if (windowWidth <= 775) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  return (
    <StyledThemeProvider theme={{ ...theme, isMobile, isMiniCard }}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
