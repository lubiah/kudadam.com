const forms = require('@tailwindcss/forms');
const colours = require('tailwindcss/colors');

/**@type {import("tailwindcss").Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "class",

	theme: {
		screens: {
			xs: '360px',
			mobile: '640px',
			tablet: '768px',
			laptop: '1024px',
			desktop: '1280px',
			tv: '1536px'
		},
		colors: {
			primary: {
				50: "#FFE0E0",
				100: "#FFC2C2",
				200: "#FF8585",
				300: "#FF4747",
				400: "#FF0F0F",
				500: "#D00000",
				600: "#A80000",
				700: "#7A0000",
				800: "#520000",
				900: "#290000",
				950: "#140000"
			},
			gray: colours.neutral,
			secondary: colours.purple,
			white: "white"
		},
		extend: {
			lineHeight: {
				tighter: '1.15'
			},
		}
	},

	plugins: [forms]
};

module.exports = config;
