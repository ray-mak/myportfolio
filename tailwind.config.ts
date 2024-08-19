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
        bgRetroDark: "#E3DDCD",
        retroBlue: "#6DB8A1",
        retroSalmon: "#E28967",
        retroRed: "#E23D27",
        retroGray: "#DEDAD9",
        darkBlue: "#224A4A",
      },
      boxShadow: {
        darkBlue: "15px 15px 0px 0px rgba(34,74,74,1)",
        solidBlack: "6px 6px 0px 0px rgba(0,0,0,1)",
        smBlack: "2px 2px 0px 0px rgba(0,0,0,1)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
export default config
