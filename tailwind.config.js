/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens:{
        'sm': '480px',
        'tb': '660px',
        'md': '820px',
        'lg': '960px',
        'xl': '1440px'
      },
      colors:{
        'bg': 'var(--bg)',
        'accent': 'var(--accent)',
        'text': 'var(--text)',
        'primary': 'var(--primary)',
      },
    },
  },
  plugins: [],
}

