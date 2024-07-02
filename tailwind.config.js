/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Cobalt-Blue': '#0047AB ',
  'Teal': '#008080 ',
  'Silver': '#C0C0C0',
  'Orange': '#FF8C00 ', 
      },
      fontFamily: {
        lato: "'Lato', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

