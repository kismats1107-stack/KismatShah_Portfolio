/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["'Kanit'", 'sans-serif'],
        outfit: ["'Outfit'", 'sans-serif'],
        jakarta: ["'Plus Jakarta Sans'", 'sans-serif'],
        space: ["'Space Grotesk'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
