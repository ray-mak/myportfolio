import type { Config } from "tailwindcss"

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
      colors: {
        bgRetro: "#fbf5e9",
        bgDarkMode: "#2E2A25",
        bgRetroDark: "#E3DDCD",
        bgRetroDarkMode: "#2C2B29",
        retroBlue: "#6DB8A1",
        retroBlueDarkMode: "#4A8C76",
        retroSalmon: "#E28967",
        retroSalmonDarkMode: "#C07058",
        retroRed: "#E23D27",
        retroRedDarkMode: "#B63424",
        retroGray: "#DEDAD9",
        retroGrayDarkMode: "#A6A4A3",
        darkBlue: "#224A4A",
      },
      boxShadow: {
        darkBlue: "15px 15px 0px 0px rgba(34,74,74,1)",
        solidBlack: "6px 6px 0px 0px rgba(0,0,0,1)",
        smBlack: "2px 2px 0px 0px rgba(0,0,0,1)",
        blueDarkMode: "15px 15px 0px 0px rgba(38,85,85,1)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
