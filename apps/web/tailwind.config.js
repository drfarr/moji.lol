/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("configs/tailwind/tailwind.config")],

  theme: {
    extend: {
      fontFamily: {
        Dancing: ["DynaPuff", "cursive"],
      },
    },
  },
  plugins: [],
};
