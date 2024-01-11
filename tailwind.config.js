/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {

    container: {
      center: true,
    },


    extend: {

      colors: {
        'tailwind-grey': '#2D3748', // gray-800
        'lighter-grey': '#5C6679',
        'light-light-blue': '#DEF2FF',
        'orange-gold': '#DBA11C',
        'citrus-orange': '#FF822D',
  
      },
    },
  },
  plugins: [

    require('flowbite/plugin'),
  ],
};

