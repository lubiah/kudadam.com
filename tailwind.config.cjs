const forms = require('@tailwindcss/forms');
const colours = require("tailwindcss/colors");

/**@type {import("tailwindcss").Config} */
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
			gray: colours.neutral
		},
		extend: {
			lineHeight: {
				'tighter': "1.15"
			}
		}
	},

	plugins: [forms]
};

module.exports = config;
