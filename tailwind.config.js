/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/JSX/TSX files in the src folder
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        dash: 'dash 3s linear infinite',
      },
      keyframes: {
        dash: {
          '0%': { 'stroke-dashoffset': '100' },
          '100%': { 'stroke-dashoffset': '0' },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
}

