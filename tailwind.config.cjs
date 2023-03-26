const forms = require('@tailwindcss/forms');
const colours = require("tailwindcss/colors");

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
		extend: {}
	},

	plugins: [forms]
};

module.exports = config;
