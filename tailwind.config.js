/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de994a",   
        secondary: "#145575", 
        accent: "#D62727"    
      }
    },
  },
  plugins: [],
}
