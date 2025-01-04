/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient': 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)',
				'gradient-computara-1': 'linear-gradient(to left, rgb(59, 158, 223) 60%, #1aa7c3)',
				'gradient-computara-2': 'linear-gradient(to left, rgb(34, 100, 145) 60%, #157689)'
			},
			keyframes: {
				fadeInSmooth: {
					'0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
					'50%': { opacity: '0.5', transform: 'translateY(15px) scale(1)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				}
			},
			animation: {
				fadeInSmooth: 'fadeInSmooth 2s cubic-bezier(0.25, 1, 0.5, 1)'
			}
		}
	},
	plugins: []
}
