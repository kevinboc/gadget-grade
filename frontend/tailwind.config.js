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
        'mobileTrending': 'min(30%)',
        'largeMobileActivity': 'min(30%)',
        'mobileActivity': 'min(50%)',
      }
    },
  },
  plugins: [],
}