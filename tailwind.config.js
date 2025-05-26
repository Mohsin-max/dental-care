/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1D40FE",
        secondary:"#0E1E40",
        paraColor:"#4b5563e9"
      },
      spacing:{
        mobileXPad:'16px',
        desktopXPad:'64px',
      }
    },
  },
  plugins: [],
}