import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        grey1: "#F1F2F8",
        grey2: "#D5D7E1",
        grey3: "#9FA2B0",
        grey4: "#6D6F79",
        grey5: "#4B4D57",
        black: "#31333D",
        mainKiwi: "#91E12E",
        lightKiwi: "#ABEE59",
        subBlueGreen: "#2AC4B5",
        subBlueIvy: "#1A8BBB",
        positiveKellyGreen: "#48C21C",
        negativeSunsetRed: "#F65757",
      },
      spacing: {
        18: "4.5rem",
      },
    },
    fontFamily: {
      noto: [
        "Noto Sans KR",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      onest: [
        "Onest",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    fontSize: {
      title: "2.25rem",
      subtitle: "1.5rem",
      body: "1rem",
      small: "0.75rem",
    },
  },
  plugins: [],
} satisfies Config;
