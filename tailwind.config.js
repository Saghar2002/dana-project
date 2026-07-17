/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dana-dark': '#0a1d1d', 
        'primary': '#00d09c', 
      },
    },
  },
  plugins: [],
}

