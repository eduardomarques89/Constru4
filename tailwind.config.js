/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#067CDC",
        secondary: "#F6980C",
        checked: "#7CCF00",
      }
    },
  },
  plugins: [],
};
