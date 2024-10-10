/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sketch:[ "Londrina Sketch","sans-serif"],
        lexend:["Lexend", "sans-serif"],
       ubuntu:["Ubuntu", "sans-serif"],
      }
    },
  },
  plugins: [],
}

