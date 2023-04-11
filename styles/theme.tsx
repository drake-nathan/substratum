import type { DefaultTheme } from 'styled-components';

export interface Colors {
  bgMain: string;
  textMain: string;
  hover: string;
}

export const darkColors: Colors = {
  bgMain: '#0f0f0f',
  textMain: '#fffcf9',
  hover: '#b9b7b6',
};

export const lightColors: Colors = {
  bgMain: '#fffcf9',
  textMain: '#0f0f0f',
  hover: '#7e7e7e',
};

export const defaultTheme: DefaultTheme = {
  borderRadius: '1px',

  colors: lightColors,
};
