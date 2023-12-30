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
    extend: {
      colors: {
        black: "#0f0f0f",
        hover: {
          dark: "#b9b7b6",
          light: "#7e7e7e",
        },
        white: "#fffcf9",
      },
    },
  },
};
