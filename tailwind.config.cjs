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
				50: "#FFF5F5",
				100: "#FFE6E6",
				200: "#FFC7C7",
				300: "#FFA4A4",
				400: "#FE7171",
				500: "#ED0101",
				600: "#D50101",
				700: "#BC0101",
				800: "#9D0101",
				900: "#7A0000",
				950: "#560000"
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
