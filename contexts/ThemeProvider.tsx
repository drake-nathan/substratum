import { useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useWindowSize } from 'hooks/useWindowSize';
import {
  type Colors,
  defaultTheme,
  darkColors,
  lightColors,
} from '../styles/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useWindowSize();

  const [isMiniCard, setIsMiniCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [colors, setColors] = useState<Colors>(lightColors);

  const currentTheme = colors === lightColors ? 'light' : 'dark';

  useEffect(() => {
    if (windowWidth < 650 && windowWidth > 390) setIsMiniCard(true);
    else setIsMiniCard(false);

    if (windowWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  const toggleTheme = () => {
    if (colors === lightColors) setColors(darkColors);
    else setColors(lightColors);
  };

  return (
    <StyledThemeProvider
      theme={{
        ...defaultTheme,
        colors,
        isMobile,
        isMiniCard,
        currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
