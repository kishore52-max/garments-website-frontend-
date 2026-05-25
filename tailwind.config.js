
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        charcoal: '#1A1A1A',
        cream: '#F5EFE6',
        beige: '#E8DCC4',
        gold: '#C9A961',
        taupe: '#8A7E6B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
}
