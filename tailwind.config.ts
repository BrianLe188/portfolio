import type { Config } from "tailwindcss";

const keyframes = {
  "name-loading-move-up": {
    "100%": { transform: "translateY(-150px)" },
  },
};

const animation = {
  "name-loading-move-up": "name-loading-move-up 0.5s linear",
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    colors: {
      primary: {
        yellow: "#faf6f2",
        black: "#231f20",
      },
    },
    extend: {
      keyframes,
      animation,
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
