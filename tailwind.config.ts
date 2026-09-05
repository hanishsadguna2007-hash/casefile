import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        detective: {
          950: "#0b0c0f",
          900: "#111317",
          850: "#16181e",
          800: "#1c1f26",
          750: "#242732",
          700: "#2d323f",
          600: "#3e4455",
          500: "#545d73",
          400: "#7b859e",
          300: "#a6b0c7",
          200: "#cbd2e2",
          100: "#e9ecf4",
          50: "#f5f6fa",
        },
        paper: {
          50: "#fbfaf7",
          100: "#f5f3eb",
          200: "#ebe7d9",
          300: "#ddd7c2",
          400: "#c7bfa3",
          800: "#36322b",
          900: "#23201b",
        },
        evidence: {
          DEFAULT: "#b91c1c",
          dark: "#991b1b",
          light: "#ef4444",
          stamp: "#dc2626",
        },
        classified: {
          DEFAULT: "#d97706",
          dark: "#b45309",
        },
        solved: {
          DEFAULT: "#059669",
          dark: "#047857",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Courier New", "monospace"],
      },
      boxShadow: {
        dossier: "0 4px 20px -2px rgba(0, 0, 0, 0.45), 0 2px 6px -1px rgba(0, 0, 0, 0.3)",
        stamp: "inset 0 0 0 2px currentColor, 0 2px 4px rgba(0,0,0,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "stamp-drop": "stampDrop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "slide-up": "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        stampDrop: {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-8deg)" },
          "100%": { opacity: "0.95", transform: "scale(1) rotate(-3deg)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      }
    },
  },
  plugins: [],
};
export default config;
