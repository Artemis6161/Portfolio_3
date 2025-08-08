const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
        'surface': '#121212',         // Main dark background
        'surface-light': '#1D1D1D',   // For cards or slightly lighter elements
        'text-primary': '#F5F5F5',     // For headings and primary text
        'text-secondary': '#E0E0E0',   // For body text and paragraphs
        'accent': '#BB86FC',
        },
      fontFamily: {
        // Your chosen fonts here
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

