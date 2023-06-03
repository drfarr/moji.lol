/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("configs/tailwind/tailwind.config")],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};
