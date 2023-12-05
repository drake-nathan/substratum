import type { DefaultTheme } from "styled-components";

export interface Colors {
  bgMain: string;
  textMain: string;
  hover: string;
}

export const darkColors: Colors = {
  bgMain: "#0f0f0f",
  hover: "#b9b7b6",
  textMain: "#fffcf9",
};

export const lightColors: Colors = {
  bgMain: "#fffcf9",
  hover: "#7e7e7e",
  textMain: "#0f0f0f",
};

export const defaultTheme: DefaultTheme = {
  borderRadius: "1px",

  colors: lightColors,
};
