/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      "d-pur": "#191825",
      "m-pur": "#4C0070",
      "l-pur": "#E384FF",
    },
    fontFamily: {
      standard: ["Josefin Sans"],
      bold: ["Josefin Sans SemiBold 600"],
    },
  },
  plugins: [require("daisyui")],
};
