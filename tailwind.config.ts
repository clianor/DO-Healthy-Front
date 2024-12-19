import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      primary: {
        normal: '#16A34A',
        hover: '#22C55E',
        active: '#15803D',
        disabled: 'rgba(22, 163, 74, 0.5)',
        subtle: '#BBF7D0',
        strong: '#14532D',
      },
      typography: {
        title: '#030712',
        body: '#1F2937',
        subtle: '#4B5563',
        caption: '#9CA3AF',
      },
      background: {
        100: '#F9FAFB',
        200: '#F3F4F6',
        300: '#E5E7EB',
      },
      stroke: {
        100: '#F3F4F6',
        200: '#D1D5DB',
        300: '#6B7280',
      },
      neutral: {
        100: '#F9FAFB',
        200: '#F3F4F6',
        300: '#E5E7EB',
        400: '#D1D5DB',
        500: '#9CA3AF',
        600: '#6B7280',
        700: '#4B5563',
        800: '#374151',
        900: '#1F2937',
        1000: '#111827',
        1100: '#030712',
      },
    },
  },
  plugins: [],
} satisfies Config;
