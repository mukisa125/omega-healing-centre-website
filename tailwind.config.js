/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(266, 70%, 50%)',
        'primary-dark': 'hsl(266, 70%, 40%)',
        'primary-light': 'hsl(266, 70%, 60%)',
      },
    },
  },
  plugins: [],
}
