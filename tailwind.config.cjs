const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			"xs": "360px",
			"mobile": "640px",
			"tablet": "768px",
			"laptop": "1024px",
			"desktop": "1280px",
			"tv": "1536px"
		},
		colors: {
			"gray": {
				50: "#fafafa",
				100: "#f5f5f5",
				200: "#e5e5e5",
				300: "#d4d4d4",
				400: "#a3a3a3",
				500: "#737373",
				600: "#525252",
				700: "#404040",
				800: "#262626",
				900: "#171717"
			}
		},
		extend: {}
	},

	plugins: [forms]
};

module.exports = config;
