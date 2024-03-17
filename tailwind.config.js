/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        black: "#0f0f0f",
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        hover: {
          dark: "#b9b7b6",
          light: "#7e7e7e",
        },
        icon: {
          color: "#00000076",
          dark: "#999795",
          light: "#ded8d1",
        },
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        offset: "#f4f1ed",
        overlay: "rgba(0, 0, 0, 0.6)",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
