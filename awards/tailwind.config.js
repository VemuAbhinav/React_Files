/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry: ['Zentry', 'sans-serif'],
        general: ['General', 'sans-serif'],
        'circular-web': ['Circular Web', 'sans-serif'],
        'robert-medium': ['Robert Medium', 'sans-serif'],
        'robert-regular': ['Robert Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}