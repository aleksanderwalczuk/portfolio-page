module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '5xl': ['3.5rem', {lineHeight: '1.143'}],
        '4xl': '2.75rem',
        '3xl': ['2rem', {lineHeight: '1.25'}],
        '2xl': '1.6875rem',
        xl: ['1.375rem', {lineHeight: '1.364'}],
        lg: '1.1875rem',
        base: ['1rem', {lineHeight: '1.625'}],
        sm: '0.9375rem',
        xs: ['0.875rem', {lineHeight: '1.214'}],
      },
    },
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
