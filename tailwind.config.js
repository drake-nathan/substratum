/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [],
  theme: {
    colors: {
      black: "#0f0f0f",
      hover: {
        dark: "#b9b7b6",
        light: "#7e7e7e",
      },
      offset: "#f4f1ed",
      white: "#fffcf9",
    },
    extend: {
      screens: {
        sm: "500px",
      },
    },
    fontFamily: {
      exo: ["Exo", "sans-serif"],
      sans: ["basic-sans", "sans-serif"],
      transducer: ["transducer", "sans-serif"],
      transducerCondensed: ["transducer-condensed", "sans-serif"],
    },
  },
};
