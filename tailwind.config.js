module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
