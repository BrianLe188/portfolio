import type { Config } from "tailwindcss";

const keyframes = {
  "name-loading-move-up": {
    from: { top: "50%", transform: "translateY(-50%)", opacity: "0.5" },
    to: { top: "100px", opacity: "1" },
  },
  "hr-move-right": {
    from: {
      borderColor: "#3b82f6",
      visibility: "visible",
    },
    "90%": {
      borderColor: "#3b82f6",
      width: "0",
    },
    to: {
      visibility: "hidden",
      transform: "translateX(80%)",
      width: "100%",
    },
  },
  "hr-move-left": {
    from: {
      borderColor: "#3b82f6",
      visibility: "visible",
    },
    "90%": {
      borderColor: "#3b82f6",
      width: "0",
    },
    to: {
      visibility: "hidden",
      transform: "translateX(-80%)",
      width: "100%",
    },
  },
};

const animation = {
  "name-loading-move-up": "name-loading-move-up .5s linear forwards",
  "hr-move-left": "hr-move-left .7s linear forwards",
  "hr-move-right": "hr-move-right .7s linear forwards",
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
