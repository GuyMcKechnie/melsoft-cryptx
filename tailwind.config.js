/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        surface: '#111C44',
        'surface-alt': '#1B254F',
        primary: '#6366F1',
        'primary-soft': '#EEF2FF',
        accent: '#22D3EE',
        success: '#34D399',
        danger: '#F87171',
        warning: '#FBBF24',
        muted: '#94A3B8',
        'muted-soft': '#CBD5F5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 23, 42, 0.35)',
        subtle: '0 8px 24px rgba(100, 116, 139, 0.18)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};

