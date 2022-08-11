/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["FinkHeavy", "sans-serif"]
      },
      colors: {
        'dark-brown': "#422A0D",
        'light-brown': "#D18835"
    }
  },
  plugins: [],
}};