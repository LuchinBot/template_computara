/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient': 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)',
				'gradient-computara-1': 'linear-gradient(to left, rgb(59, 158, 223) 60%, #1aa7c3)',
				'gradient-computara-2': 'linear-gradient(to left, rgb(34, 100, 145) 60%, #157689)'
			}
		}
	},
	plugins: []
}
