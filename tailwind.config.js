/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./App.{js,jsx,ts,tsx}",

    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
};
