/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        xs:'375px',
        'lg+':'1181.999999px',
        'xl+':'1281px',
      },
      colors:{
        custom:"rgb(243, 255, 25)"
      }
    },
  },
  plugins: [],
}

