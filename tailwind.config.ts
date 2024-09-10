import type { Config } from "tailwindcss";

const baseFonts = [
  "ui-sans-serif",
  "system-ui",
  "sans-serif",
  "Apple Color Emoji",
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        light: {
          100: "rgb(var(--light-100) / <alpha-value>)",
          200: "rgb(var(--light-200) / <alpha-value>)",
        },

        dark: {
          100: "rgb(var(--dark-100) / <alpha-value>)",
          200: "rgb(var(--dark-200) / <alpha-value>)",
          300: "rgb(var(--dark-300) / <alpha-value>)",
        },

        primary: {
          100: "rgb(var(--primary-100) / <alpha-value>)",
        },

        gray: {
          100: "rgb(var(--gray-100) / <alpha-value>)",
          200: "rgb(var(--gray-200) / <alpha-value>)",
        },
      },

      borderWidth: {
        0: "var(--border-0)",
        0.5: "var(--border-0-5)",
        border: "var(--border)",
        2: "var(--border-2)",
        3: "var(--border-3)",
        4: "var(--border-4)",
        5: "var(--border-5)",
        6: "var(--border-6)",
      },

      fontFamily: {
        bold: ["var(--font-inter-bold)", ...baseFonts],
        semibold: ["var(--font-inter-semibold)", ...baseFonts],
        medium: ["var(--font-inter-medium)", ...baseFonts],
        regular: ["var(--font-inter-regular)", ...baseFonts],
        light: ["var(--font-inter-light)", ...baseFonts],
      },
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          background: "var(--dark-100)",
        },
      },
      {
        light: {
          background: "var(--light-100)",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
