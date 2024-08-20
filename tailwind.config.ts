import type { Config } from "tailwindcss"
import { RecursiveKeyValuePair } from "tailwindcss/types/config"

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
      fontFamily: {
        default: "var(--default-font)",
        MegaMan: ["MegaMan"],
      },
      colors: {
        "accent-primary": "var(--primary-accent)",
        "accent-secondary": "var(--secondary-accent)",
        "accent-tertiary": "var(--tertiary-accent)",
        "default-svg": "var(--default-svg)",
      },
      backgroundColor: {
        default: "var(--default-bg)",
        primary: "var(--primary-bg)",
        secondary: "var(--secondary-bg)",
        tertiary: "var(--tertiary-bg)",
      },
      textColor: {
        primary: "var(--primary-text)",
        secondary: "var(--secondary-text)",
        tertiary: "var(--tertiary-text)",
      },
      borderColor: {
        primary: "var(--primary-border)",
        secondary: "var(--secondary-border)",
        tertiary: "var(--tertiary-border)",
      },
      fill: {
        primary: "var(--primary-fill)",
        secondary: "var(--secondary-fill)",
        tertiary: "var(--tertiary-fill)",
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
  plugins: [require("tailwindcss-animated"), require("@tailwindcss/typography")],
  safelist: [],
}
export default config
