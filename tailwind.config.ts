import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#1A1F2C",
        "card-1": "#8B5CF6",
        "card-2": "#D946EF",
        "card-3": "#F97316",
        "card-4": "#0EA5E9",
      },
      animation: {
        "card-hover": "card-hover 0.3s ease-in-out forwards",
      },
      keyframes: {
        "card-hover": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;