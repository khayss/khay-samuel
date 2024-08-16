import type { Config } from "tailwindcss";

const customSizes = {
  "30x": "30px",
  "40x": "40px",
  "360x": "360px",
} as const;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "max-screen": "1440px",
        "240x": "240px",
        "540x": "540px",
      },
      width: customSizes,
      height: customSizes,
      gridTemplateColumns: {
        "min-6": "repeat(6, min-content)",
        "min-3": "repeat(3, min-content)",
      },
      colors: {
        "gun-metal": "#222831",
        verdigris: "#76ABAE",
        silver: "#A9A9A9",
        platinum: "#DFDFDE",
        "spanish-orange": "#DC5F00",
        "anti-flash-white": "#EEEEEE",
        "gun-metal-light": "#31363F",
        "dim-gray": "#686D76",
        onyx: "#373A40",
        gray: "#73777B",
      },
    },
  },
  plugins: [],
} satisfies Config;
