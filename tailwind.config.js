/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#1C315E",
        theme1: "#227C70",
        theme3: "#88A47C",
        theme4: "#E6E2C3",
      },
    },
  },
  plugins: [],
};
