module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: ' translateX(0)' },
          '100%': { transform: 'translateX(-2400px)' },
        },
      },
      animation: {
        scroll: 'scroll 14s linear infinite',
      },
    },
  },
  plugins: [],
}
