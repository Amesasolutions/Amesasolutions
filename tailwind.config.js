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
        secondaryColor: "#FEC00F",
        headingColor: "#222",
        txtSmallColor: "#555"
      }
    },
  },
  plugins: [],
}

