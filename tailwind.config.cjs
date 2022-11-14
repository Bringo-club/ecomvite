/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				"light-green": "#1CBFA2",
				"dark-green": "#063940",
				"white": "#FFFFFF",
				"grey": "#667483",
			},
			fontFamily: {
				'sans': ['Cairo', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		// function ({ addComponents }) {
		// 	addComponents({
		// 	  '.container': {
		// 		maxWidth: '100%',
		// 		// '@screen sm': {
		// 		//   maxWidth: '600px',
		// 		// },
		// 		// '@screen md': {
		// 		//   maxWidth: '700px',
		// 		// },
		// 		// '@screen lg': {
		// 		//   maxWidth: '800px',
		// 		// },
		// 		'@screen xl': {
		// 		  maxWidth: '1300px',
		// 		},
		// 	  }
		// 	})
		//   }
	],
};