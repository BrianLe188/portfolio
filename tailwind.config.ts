import type { Config } from "tailwindcss";

const keyframes = {
  "name-loading-move-up": {
    from: { top: "50%", transform: "translateY(-50%)", opacity: "0.5" },
    to: { top: "40px", opacity: "1" },
  },
};

const animation = {
  "name-loading-move-up": "name-loading-move-up 0.5s linear forwards",
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {
      keyframes,
      animation,
      colors: {
        primary: {
          yellow: "#faf6f2",
          black: "#231f20",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
