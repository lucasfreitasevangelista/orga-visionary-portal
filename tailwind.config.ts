import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				menopausa: {
					'pink': '#FF6B99',
					'light-pink': '#FFD2E0',
					'dark-pink': '#DB4776',
					'lavender': '#E7D1FF',
					'soft-purple': '#A67EB7',
					'cream': '#FFF9F3',
					'gray': '#5A5A5A',
					'light-gray': '#F5F5F5',
				},
				conversa: {
					'dark': '#111827',
					'darker': '#0B1120',
					'gold': '#D4AF37',
					'muted-gold': '#AA9955',
					'navy': '#0F172A',
					'charcoal': '#333333',
					'white': '#FFFFFF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			boxShadow: {
				'premium': '0 10px 50px -12px rgba(0, 0, 0, 0.25)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.05)',
				'hover': '0 15px 30px rgba(0, 0, 0, 0.1)',
				'soft': '0 5px 15px rgba(255, 107, 153, 0.15)',
				'gold': '0 5px 15px rgba(212, 175, 55, 0.15)',
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(rgba(255, 107, 153, 0.15), rgba(255, 107, 153, 0.05)), url("/hero-bg.jpg")',
				'wave-pattern': 'url("/wave-bg.svg")',
				'gradient-pink': 'linear-gradient(135deg, #FFD2E0 0%, #FF6B99 100%)',
				'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #AA9955 100%)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'float': 'float 4s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'slide-up': 'slide-up 0.7s ease-out forwards',
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(rgba(255, 107, 153, 0.15), rgba(255, 107, 153, 0.05)), url("/hero-bg.jpg")',
				'wave-pattern': 'url("/wave-bg.svg")',
				'gradient-pink': 'linear-gradient(135deg, #FFD2E0 0%, #FF6B99 100%)',
				'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #AA9955 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
