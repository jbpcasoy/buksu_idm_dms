/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
        tableHeader: "1.1rem",
      },
      colors: {
        CITLDarkBlue: "#152033",
        CITLOrange: "#F2C050",
        CITLWhite: "#FFFFFF",
        // CITLGray: "#717883",
        CITLGray: {
          main: "#717883",
          light: "#f0f1f2",
          lighter: "#cccccc",
        },
        // "CITLGray-lighter": "#606772",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
