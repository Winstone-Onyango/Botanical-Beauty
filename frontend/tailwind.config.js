/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      forest: '#344B3D', sage: '#82947A', ivory: '#E9E4D6',
      sand: '#C7A98A', earth: '#51483E', mist: '#F7F6F0'
    },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] }
  }},
  plugins: [],
}
