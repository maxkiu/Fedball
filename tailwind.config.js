/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}" // Assure-toi que toutes les extensions sont incluses
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',  // Pour petits écrans (iPhone SE, Android petit)
        sm: '640px',  // Pour tablettes petites
        md: '768px',  // Pour tablettes standards
        lg: '1024px', // Pour écrans PC
        xl: '1280px', // Grands écrans PC
        '2xl': '1536px' // Ultra grands écrans
      }
    },
  },
  plugins: [],
};
