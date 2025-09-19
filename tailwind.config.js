/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#df9b4f",   
        secondary: "#1b5674", 
        accent: "#D62727"    
      }
    },
  },
  plugins: [],
}
