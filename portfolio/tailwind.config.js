const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
}

// colors: {
      //   'black': '#191825',
      //   'periw': '#865DFF',
      //   'dar-purple': '#4C0070',
      //   'med-purple': '#E384FF',
      //   'lig-purple': '#FFA3FD'
      // },