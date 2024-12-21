import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
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
  			strong: '#14532D'
  		},
  		typography: {
  			title: '#030712',
  			body: '#1F2937',
  			subtle: '#4B5563',
  			caption: '#9CA3AF'
  		},
  		background: {
  			'100': '#F9FAFB',
  			'200': '#F3F4F6',
  			'300': '#E5E7EB'
  		},
  		stroke: {
  			'100': '#F3F4F6',
  			'200': '#D1D5DB',
  			'300': '#6B7280'
  		},
  		neutral: {
  			'100': '#F9FAFB',
  			'200': '#F3F4F6',
  			'300': '#E5E7EB',
  			'400': '#D1D5DB',
  			'500': '#9CA3AF',
  			'600': '#6B7280',
  			'700': '#4B5563',
  			'800': '#374151',
  			'900': '#1F2937',
  			'1000': '#111827',
  			'1100': '#030712'
  		}
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
