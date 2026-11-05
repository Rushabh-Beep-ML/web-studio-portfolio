import type { Config } from "tailwindcss";

// Tailwind reads the CSS variables from src/styles/tokens.css,
// so tokens are edited in one place only.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: { md: "810px", lg: "1200px" },
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        raised: "var(--color-surface-raised)",
        line: "var(--color-border)",
        accent: { DEFAULT: "var(--color-accent)", strong: "var(--color-accent-strong)", soft: "var(--color-accent-soft)" },
        secondary: "var(--color-secondary)",
        muted: "var(--color-text-muted)",
        danger: "var(--color-danger)",
      },
      fontFamily: { sans: "var(--font-sans)", mono: "var(--font-mono)" },
      borderRadius: { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)" },
      boxShadow: { card: "var(--shadow-card)", glow: "var(--glow-accent)" },
      maxWidth: { container: "var(--container)" },
    },
  },
  plugins: [],
} satisfies Config;
