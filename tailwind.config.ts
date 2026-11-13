import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: {
          50: "#f7f1ea",
          100: "#efe3d3",
          200: "#ddc3a5",
          300: "#c8a37e",
          400: "#b3855c",
          500: "#9c6b3f",
          600: "#7c522e",
          700: "#5c3d22",
          800: "#3a2a20",
          900: "#241a13",
        },
        honey: "#d9a441",
        caramel: {
          DEFAULT: "#d98a2b",
          dark: "#b06d1d",
          light: "#fdf0dc",
        },
        ivory: "#fdf8f1",
        sand: "#f6ecdd",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#2e2118",
        muted: "#6b5a4e",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
