import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  plugins: [nextui({
	layout: {
		fontSize: {
			'large': ['10px', '10px']
		}
	},
	themes: {
		light: {
			colors: {
				primary: {
					DEFAULT: 'red',
					foreground: 'black'
				},
				focus: {
					DEFAULT: 'black'
				}
			}
		}
	}
  })],
}
