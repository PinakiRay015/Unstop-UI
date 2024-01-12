/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '925px', // custom large screen size
        'md': '607px',  // custom medium screen size
        'sm': '300px',  // custom small screen size
        'xs': '480px',  // custom extra-small screen size
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}

