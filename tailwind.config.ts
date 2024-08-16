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
        retroBlue: "#77B7B7",
        retroSalmon: "#E28967",
        retroRed: "#E23D27",
        retroGray: "#4C5157",
        darkBlue: "#224A4A",
      },
    },
  },
  plugins: [],
}
export default config
