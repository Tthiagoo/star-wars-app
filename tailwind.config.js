/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",

    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-default)",
          light: "var(--color-primary-light)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-default)",
          light: "var(--color-secondary-light)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary-default)",
          light: "var(--color-tertiary-light)",
        },
        accent: {
          DEFAULT: "var(--color-accent-default)",
          light: "var(--color-accent-light)",
        },
        grey: {
          DEFAULT: "var(--color-grey-default)",
        },
        slate: {
          DEFAULT: "var(--color-slate-default)",
        },
        dark: {
          DEFAULT: "var(--color-dark-default)",
        },
        light: {
          DEFAULT: "var(--color-light-default)",
        },
        overlay: "var(--color-overlay)",
      },
    },
  },
  presets: [require("nativewind/preset")],
};
