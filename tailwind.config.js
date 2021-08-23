module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
       space2:"0.3em",
      }
    },
  },
  variants: {
    extend: {
       display: ['hover', 'focus'],
    },
  },
  plugins: [],
}
