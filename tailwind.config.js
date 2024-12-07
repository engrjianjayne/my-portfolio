/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grape: "rgba(114, 35. 204)",
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #f00, #ff0)', // Instagram colors
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.text-gradient': {
        background: 'linear-gradient(to right, #f00, #ff0)', // Instagram gradient
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    });
  }],
}