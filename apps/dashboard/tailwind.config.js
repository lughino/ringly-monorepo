/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.75rem',
        '5xl': '2rem',
        '6xl': '2.125rem',
        '7xl': '2.25rem',
        '8xl': '2.375rem',
        '9xl': '2.5rem',
      },
      boxShadow: {
        1: 'rgba(0, 0, 0, 0.2) 2px 2px 4px 0px',
        2: 'rgba(0, 0, 0, 0.45) 3px 4px 0px 0px',
      },
      padding: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
    },
  },
  plugins: [],
};
