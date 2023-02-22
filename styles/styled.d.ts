import 'styled-components';
import type { Colors } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    isMobile?: boolean;
    isMiniCard?: boolean;
    colors: Colors;
    toggleTheme?: () => void;
    currentTheme?: string;
  }
}
