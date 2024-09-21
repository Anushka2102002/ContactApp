/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",       // Added missing '#'
        "dark-yellow": "#FCCA3F", // Added missing '#'
        orange: "#F6820C",
      },
    },
  },
  plugins: [],
}
