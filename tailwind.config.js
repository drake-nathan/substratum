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
      borderRadius: {
        xs: "1px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        even: "0px 2px 10px 0px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        black: "#0f0f0f",
        hover: {
          dark: "#b9b7b6",
          light: "#7e7e7e",
        },
        icon: {
          color: "#00000076",
          dark: "#999795",
          light: "#ded8d1",
        },
        offset: "#f4f1ed",
        overlay: "rgba(0, 0, 0, 0.6)",
        white: "#fffcf9",
      },
      gridTemplateAreas: {
        customLayout: `
          'top top'
          'cut overhand'
          'faro wash'
          'reverse reverse'
          'vault vault'
        `,
      },
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
