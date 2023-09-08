import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      accent: {
        primaryLight: "#0252CD",
        primaryDark: "#428DFF",
        Secondary: "#FFBE62",
      },
      white: {
        DEFAULT: "#fff",
        800: "#F3F8FF",
        500: "#6F74A7",
      },
      black: {
        200: "#151E2C",
        300: "#192333",
        400: "#778295",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
