/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        appfont: ["var(--font-appfont)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
