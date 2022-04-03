
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
          '0%': {
            color: '#000',
          },
          '50%': {
            color: '#fff',
          },
          '100%': {
            color: '#000',
          },
        },
        loadingShow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loadingHidden: {
          '0%': { opacity: 1 },
          '100%': {
            opacity: 0,
            'z-index': -999,
          },
        },
      },
      animation: {
        scroll: 'scroll 150s linear infinite',
        arrow: 'arrow 3s ease-in-out infinite',
        showText: 'showText .5s ease-in-out forwards',
        loadingText: 'loadingText 3s infinite',
        loadingHidden: 'loadingHidden .5s 3s ease-in-out forwards',
        loadingShow: 'loadingShow .5s ease-in-out forwards',
      },
    },
  },
  plugins: [
  ],
}
