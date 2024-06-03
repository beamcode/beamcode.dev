import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    hljs: {
      theme: "atom-one-dark",
    },
    extend: {
      textColor: {
        primary: {
          light: "#1b1b18",
          dark: "#ededec",
        },
        secondary: {
          light: "#706f6c",
          dark: "#a1a09a",
        },
      },
      backgroundColor: {
        primary: {
          main: "#121212",
          light: "#ededec",
          dark: "#444444",
        },
        secondary: {
          light: "#ededec",
          dark: "#282826",
        },
      },
      borderColor: {
        primary: {
          light: "#d1d1d1",
          dark: "#a1a09a",
        },
        secondary: {
          light: "#d1d1d1",
          dark: "#a1a09a",
        },
      },
      keyframes: {
        in: {
          "0%": {
            transform: "translateY(18px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "animate-scrollbar": {
          "0%, 100%": {
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            filter: "hue-rotate(360deg)",
          },
        },
        "wave-animation": {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        "wave-animation-hover": {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },

      animation: {
        in: "in .6s both",
        wave: "wave-animation 1s",
        "wave-hover": "wave-animation-hover 1s",
        rainbow: "animate-scrollbar 5s linear infinite",
        "fade-in-out": "fade 1s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
}
export default config
