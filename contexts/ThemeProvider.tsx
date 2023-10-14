import { useEffect, useState, type ReactNode, type ReactElement } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useWindowSize } from "hooks/useWindowSize";
import {
  type Colors,
  defaultTheme,
  darkColors,
  lightColors,
} from "../styles/theme";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props): ReactElement => {
  const { windowWidth } = useWindowSize();

  const [isMiniCard, setIsMiniCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [colors, setColors] = useState<Colors>(lightColors);

  const isDark = colors === darkColors;

  useEffect(() => {
    if (windowWidth < 650 && windowWidth > 390) setIsMiniCard(true);
    else setIsMiniCard(false);

    if (windowWidth <= 768) setIsMobile(true);
    else setIsMobile(false);

    if (windowWidth <= 1200) setIsMobileNav(true);
    else setIsMobileNav(false);
  }, [windowWidth]);

  const toggleTheme = () => {
    if (colors === lightColors) {
      setColors(darkColors);
      sessionStorage.setItem("theme", "dark");
    } else {
      setColors(lightColors);
      sessionStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setColors(savedTheme === "dark" ? darkColors : lightColors);
    } else if (prefersDark) {
      setColors(darkColors);
    }
  }, []);

  return (
    <StyledThemeProvider
      theme={{
        ...defaultTheme,
        colors,
        isMobile,
        isMobileNav,
        isMiniCard,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
