/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bold-blue':'#284673',
        'head-green':'#174735',
        'grayBorder':'#D8D8D8',
        'textcolor':'#242424',
        'buttonborder':'#B0B0B0',
        'checkboxBorder':'#ECECEC',
        'gray':'#F5F5F5',
        'Brown':'#683434',
        'Green':'#013220',
        'Blue':'#24249c',
        'White':'#FFFFFF',
        'Black':'#222222',
        'Silver':'#808080',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'LogoFont':['LogoFont','sans-serif'],
      },
      fontSize:{
        '24px':'24px',
        '14px':'14px',
      },
    },
  },
  safelist:[
    {
      pattern: /bg-.+/}
  ],
  plugins: [],
}

