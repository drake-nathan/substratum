import {
  createContext,
  type ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
}

interface ThemeProviderState {
  isDark: boolean;
  isMiniCard: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const initialState: ThemeProviderState = {
  isDark: false,
  isMiniCard: false,
  setTheme: () => null,
  theme: "system",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider = ({
  children,
  storageKey = "substratum-theme",
}: ThemeProviderProps): ReactElement => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Only access localStorage in browser environment
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem(storageKey) as null | Theme;
      return savedTheme || "system";
    }
    return "system";
  });
  const [isDark, setIsDark] = useState(false);

  // TODO: re-check responsiveness here
  const isMiniCard = false;

  // Initialize these refs as null and set them in useEffect
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const [mediaQuery, setMediaQuery] = useState<MediaQueryList | null>(null);

  // Safe handleChange function that checks for browser environment
  const handleChange = useCallback(() => {
    if (!root || !mediaQuery) {
      return;
    }

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      setIsDark(systemTheme === "dark");
      root.classList.add(systemTheme);
    } else {
      setIsDark(theme === "dark");
      root.classList.add(theme);
    }
  }, [mediaQuery, root, theme]);

  // Initialize browser-only objects
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      setRoot(window.document.documentElement);
      setMediaQuery(window.matchMedia("(prefers-color-scheme: dark)"));
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!mediaQuery || !root) {
      return;
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [handleChange, mediaQuery, root, theme]);

  const value: ThemeProviderState = {
    isDark,
    isMiniCard,
    setTheme: (theme: Theme) => {
      // Only access localStorage in browser environment
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme);
      }
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

export const useTheme = () => useContext(ThemeProviderContext);
