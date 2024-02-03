/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.php', './js/*.js'],
  important: true,
  prefix: 'u-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
