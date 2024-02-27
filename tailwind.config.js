/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('/img/wave.jpg')", // Define the custom background image
      }
    },
  },
  plugins: [],
}
