/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'steel-blue': 'var(--color-steel-blue)',
        'steel-orange': 'var(--color-steel-orange)',
        'steel-red': 'var(--color-steel-red)',
        'steel-yellow': 'var(--color-steel-yellow)',
        'steel-gray': 'var(--color-steel-gray)',
        'steel-dark': 'var(--color-steel-dark)',
      },
      fontFamily: {
        'heading': 'var(--font-heading)',
        'body': 'var(--font-body)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};