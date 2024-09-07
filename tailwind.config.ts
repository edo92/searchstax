import type { Config } from "tailwindcss";

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
        },
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

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
