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
        paper: "var(--paper)",
        card: "var(--card)",
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
        },
        mute: "var(--mute)",
        faint: "var(--faint)",
        line: "var(--line)",
        soft: "var(--soft)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1320px",
      },
      padding: {
        gutter: "var(--gutter)",
      },
      transitionTimingFunction: {
        smooth: "var(--ease)",
      },
    },
  },
  plugins: [],
};

export default config;
