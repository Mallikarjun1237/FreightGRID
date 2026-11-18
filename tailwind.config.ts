import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FAF8F2",
          100: "#F6F3EA", // Primary Canvas Background
          200: "#EBE6D8",
          300: "#DDD6C2",
          400: "#C9C0A7",
        },
        ink: {
          950: "#111214",
          900: "#18191B", // Primary Charcoal Ink
          800: "#25272B",
          700: "#3A3D44",
          600: "#5A5E69",
          500: "#808593",
          400: "#A6ABBA",
          200: "#D6D9E2",
          100: "#ECEEF2",
        },
        marigold: {
          400: "#F5A338",
          500: "#E89228", // Primary Signal Accent
          600: "#CE7815",
          700: "#A85D08",
        },
        stamp: {
          red: "#DC2626",
          green: "#16A34A",
          yellow: "#EAB308",
          blue: "#2563EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
