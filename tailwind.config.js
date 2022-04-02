module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-2400px)' },
        },
        arrow: {
          '0%, 100%': {
            transform: 'translateY(50%)',
            'animation-timing-function': 'cubic - bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic - bezier(0, 0, 0.2, 1)',
          },
        },
        showText: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loadingText: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        scroll: 'scroll 150s linear infinite',
        arrow: 'arrow 3s ease-in-out infinite',
        showText: 'showText .5s ease-in-out forwards',
        loadingText: 'loadingText 2s infinite',
      },
    },
  },
}
