

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'lumin-transparent': 'rgb(205, 209, 206,0.8)',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}