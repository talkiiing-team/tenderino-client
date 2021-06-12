module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        'inner-md': 'inset 3px 3px 3px rgba(0, 0, 0, 0.06), inset -2px -1px 3px rgba(0, 0, 0, 0.06)',
        'inner-lg': 'inset 4px 4px 3px rgba(0, 0, 0, 0.1), inset -3px -2px 3px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
};
