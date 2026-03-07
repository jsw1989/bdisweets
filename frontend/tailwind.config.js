/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baker: {
          50: '#FDF5EB',  // Light cream background
          100: '#F5E4D1',
          200: '#EBD1B3',
          300: '#E0BD93',
          400: '#E6B26A',
          500: '#EAA636',  // Primary Gold
          600: '#D6942C',
          700: '#A97321',
          800: '#5A4A3E',
          900: '#1E1916',  // Deep Dark Brown
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
