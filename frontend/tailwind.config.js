/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#222831",
        borderColor: "#BDC1C5",
        buttonColor: "#46C263",
      },
      gridAutoColumns: {
        'mobile': 'min(40%)',
      }
    },
  },
  plugins: [],
}