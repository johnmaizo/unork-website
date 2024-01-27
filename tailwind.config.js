/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'flexSm': {'max': '639px'},
        'navSm': {'max': '1023px'},
      },

      
    },
  },
  plugins: [],
}

