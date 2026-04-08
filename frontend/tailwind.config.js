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
        "on-secondary-fixed": "#2c160e",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#e9c176",
        "surface-container-low": "#f7f3ee",
        "surface-variant": "#e6e2dd",
        "on-primary-container": "#4e3700",
        "on-surface-variant": "#4e4639",
        "secondary": "#77574d",
        "primary": "#775a19",
        "tertiary-fixed-dim": "#eebd8e",
        "on-background": "#1c1c19",
        "on-primary-fixed-variant": "#5d4201",
        "error-container": "#ffdad6",
        "surface": "#fdf9f4",
        "surface-bright": "#fdf9f4",
        "outline-variant": "#d1c5b4",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary": "#7c5730",
        "secondary-fixed": "#ffdbd0",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#543410",
        "surface-tint": "#775a19",
        "secondary-container": "#fed3c7",
        "on-tertiary-fixed-variant": "#61401b",
        "secondary-fixed-dim": "#e7bdb1",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#31302d",
        "tertiary-fixed": "#ffdcbd",
        "inverse-on-surface": "#f4f0eb",
        "surface-container-high": "#ebe8e3",
        "surface-dim": "#ddd9d5",
        "on-primary-fixed": "#261900",
        "outline": "#7f7667",
        "on-tertiary-fixed": "#2c1600",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#795950",
        "on-surface": "#1c1c19",
        "primary-fixed": "#ffdea5",
        "on-secondary-fixed-variant": "#5d4037",
        "inverse-primary": "#e9c176",
        "surface-container": "#f1ede8",
        "error": "#ba1a1a",
        "background": "#fdf9f4",
        "primary-container": "#c5a059",
        "surface-container-highest": "#e6e2dd"
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
        headline: ["Noto Serif"],
        body: ["Manrope"],
        label: ["Manrope"]
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
