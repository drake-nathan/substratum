import "styled-components";

import type { Colors } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    isDark?: boolean;
    isMiniCard?: boolean;
    isMobile?: boolean;
    isMobileNav?: boolean;
    toggleTheme?: () => void;
  }
}
