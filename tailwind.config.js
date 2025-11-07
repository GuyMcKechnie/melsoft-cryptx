/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F6FA',
        'background-muted': '#F3F3F3',
        surface: '#FFFFFF',
        primary: '#6154F0',
        accent: '#FABC1E',
        positive: '#1ECB4F',
        negative: '#FF8D4D',
        heading: '#1A1A1A',
        muted: '#9E9E9E',
        subtle: '#828282',
        border: '#E4E4E4',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '4px 4px 33px rgba(0, 0, 0, 0.05)',
        subtle: '0 10px 30px rgba(26, 26, 26, 0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      maxWidth: {
        content: '1180px',
        dashboard: '1440px',
      },
    },
  },
  plugins: [],
};

