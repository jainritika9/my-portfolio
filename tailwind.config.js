module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/image3.png')",
        
       })
    },
    borderColor: theme=>({
      'golden': '#D4AF37',
      'palegreen':'#B11226',
      'peach':'#FF847C',

    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
