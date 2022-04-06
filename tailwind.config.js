module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './common/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
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
  plugins: [],
}
