/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.{php,js,html}"],
  theme: {
    extend: {
      colors: {
        'dark': '#3F3E43',
        'milk': '#F3F3F3'
      },
      boxShadow: {
        sha: '0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 8px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        mundial_b: ['MundialBlack', 'sans-serif'],
        mundial_db: ['MundialDemibold', 'sans-serif'],
        mundial_t: ['MundialThin', 'sans-serif'],
        quicksand_l: ['quicksandLight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}