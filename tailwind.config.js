module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor:{
        'textPrimary':'#92E3A9',
      },
      backgroundColor:{
        'bgPrimary':'#92E3A9',
      },
      borderColor:{
        'borderPrimary':'#92E3A9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
