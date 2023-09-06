/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0099ff",
        secondaryColor: "#0C356A",
        headingColor: "#222",
        txtSmallColor: "#555"
      }
    },
  },
  plugins: [],
}

