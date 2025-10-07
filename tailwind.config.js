/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors : {
        'blue' : '#10a1f2',
        'darkBlue' :'#279508',
        'secondary-dark' : '#202122',
        'main-hue' :'#2563EB',
        'green-hue' : '#22C55E',
        'body-slate' : '#708090',
        'dark-slate': '#COC8CF',
      }
    },
  },
  plugins: [],
}

