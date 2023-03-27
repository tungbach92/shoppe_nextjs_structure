/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '@src/pages/**/*.{js,ts,jsx,tsx}',
    '@src/components/**/*.{js,ts,jsx,tsx}',
    '@src/common/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'modal',
    {
      pattern: /bg|text|fill|-(CLFF1717|CLFF5C00|CLFF9900|CLE1CB02|CL7EE100|CL00E14D|CL00E1E1|CL1790FF)|CL0029FF|CL7000FF|CLBE0072|CLBE0022|CL690003|CL634100|CL0E6300|CL002863|CL3D0063|CL292929|CL5C5C5C|CL939393/,
    },
  ],
  theme: {
    extend: {
      screens: {
        'iPhoneSE': '425px',
      },
      fontFamily: {
        '[font-name]': ['"[Your font name]"', 'sans-serif'],
      },
      colors: {
        'darkBlue': '#1890ff',
      },
    },
  },
  plugins: [require('daisyui')],
};
