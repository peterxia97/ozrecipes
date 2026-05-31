/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF6B35', 50: '#FFF7F4', 100: '#FFE8DC', 600: '#E85D2A', 700: '#CC4F1F' },
        secondary: { DEFAULT: '#2EC4B6', 50: '#F0FAF9', 600: '#25A89C', 700: '#1E8C82' },
        warm: { 50: '#FFFAF5', 100: '#FEF0E0' },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
