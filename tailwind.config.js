/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f9',
          100: '#ffe4ef',
          200: '#ffd0e3',
          300: '#ffb0d0',
          400: '#ff8bb8',
        },
        lavender: {
          50: '#f6f3ff',
          100: '#e9e0ff',
          200: '#d8c9ff',
          300: '#bfa3ff',
          400: '#a67cff',
        },
        sky: {
          50: '#eef9ff',
          100: '#d7f0ff',
          200: '#aee0ff',
          300: '#7fc8f8',
        },
        plum: {
          400: '#6b5480',
          500: '#4a3760',
          600: '#3b2a4a',
          700: '#2a1d38',
        },
        twilight: {
          800: '#241b3a',
          900: '#160f28',
          950: '#0c0818',
        },
        gold: {
          200: '#ffe9a8',
          300: '#ffd76b',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Quicksand"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': {
            transform: 'translateY(-110vh) translateX(var(--drift-x, 20px))',
            opacity: 0,
          },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.25, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.3)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.08)' },
          '40%': { transform: 'scale(0.98)' },
          '60%': { transform: 'scale(1.1)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        heartbeat: 'heartbeat 1.2s ease-in-out infinite',
        glow: 'glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
