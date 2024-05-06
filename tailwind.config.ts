import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "colors": {
        "rojo": "#e5cdcd",
        "rojoo": "#d9aba3",
        "rojooo": "#c45b51",
        "rojoooo": "#bd3c2e",
        "rojooooo": "#932013",
        "gris": "#d9d9d9",
        "griss": "#b1b1b1",
        "grisss": "#5e5e5e",
        "grissss": "#404040",
        "grisssss": "#000000",
        "azul": "#eaf8fa",
        "azull": "#a9e3ea",
        "azulll": "#75d3dd",
        "azullll": "#2eafbd",
        "azulllll": "#1d6d76",
        "fondoLogo": "#d9d9d9",
        "blanco": "#ffffff"
       },
    },
  },
  plugins: [],
};
export default config;
