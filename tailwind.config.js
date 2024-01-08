module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.css'],
  plugins: [require('@tailwindcss/forms')],
  extends: {
    variants: {
      extend: {
        width: ['group-hover'],
        height: ['group-hover'],
      },
    },
  },
};
