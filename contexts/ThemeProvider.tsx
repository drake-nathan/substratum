import {
  type ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useWindowSize } from "hooks/useWindowSize";

export type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
}

interface ThemeProviderState {
  isDark: boolean;
  isMiniCard: boolean;
  isMobile: boolean;
  isMobileNav: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const initialState: ThemeProviderState = {
  isDark: false,
  isMiniCard: false,
  isMobile: false,
  isMobileNav: false,
  setTheme: () => null,
  theme: "system",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider = ({
  children,
  storageKey = "substratum-theme",
}: ThemeProviderProps): ReactElement => {
  const { windowWidth } = useWindowSize();

  const [theme, setTheme] = useState<Theme>("system");
  const [isDark, setIsDark] = useState(false);
  const [isMiniCard, setIsMiniCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    if (windowWidth < 650 && windowWidth > 390) setIsMiniCard(true);
    else setIsMiniCard(false);

    if (windowWidth <= 768) setIsMobile(true);
    else setIsMobile(false);

    if (windowWidth <= 1200) setIsMobileNav(true);
    else setIsMobileNav(false);
  }, [windowWidth]);

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        setIsDark(systemTheme === "dark");
        root.classList.add(systemTheme);
      } else {
        setIsDark(theme === "dark");
        root.classList.add(theme);
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const value: ThemeProviderState = {
    isDark,
    isMiniCard,
    isMobile,
    isMobileNav,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    theme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  return context;
};
