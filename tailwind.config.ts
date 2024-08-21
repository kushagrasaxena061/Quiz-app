import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        colorChange: {
          "0%, 100%": { backgroundColor: "#3b82f6" },
          "50%": { backgroundColor: "#1e3a8a" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        scaleUp: "scaleUp 0.5s ease-out",
        rotateIn: "rotateIn 0.5s ease-out",
        colorChange: "colorChange 2s ease-in-out infinite",
      },
      colors: {
        primary: "#1B2FFF",
        secondary: "#f5f8fe",
        dark: "#171b20",
      },
    },
  },
  plugins: [],
};
export default config;
