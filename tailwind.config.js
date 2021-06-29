module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      textColor: {
        'react': '#61dafb',
      },
      ringColor: {
        'react': '#61dafb',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
