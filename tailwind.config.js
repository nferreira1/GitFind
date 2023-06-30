/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1D2128',
        'secondary': '#999999'
      },
      colors: {
        'primary': '#1D2128',
        'secondary': '#999999',
        'repo-color': '#539BF5'
      }
    },
  },
  plugins: [],
}