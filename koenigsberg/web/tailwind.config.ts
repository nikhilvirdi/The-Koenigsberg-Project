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
        background: "#FAFAF8",
        "primary-text": "#1A1A1A",
        "secondary-text": "#6B6B6B",
        border: "#D4D4D4",
        accent: "#4B4038",
        "accent-hover": "#5E504A",
        "code-surface": "#F4F1EE",
      },
      fontFamily: {
        sans: ["Georgia", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        serif: ["Georgia", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
