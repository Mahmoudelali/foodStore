// tailwind.config.js

module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}',
	],

	theme: {
		extend: {
			colors: {
				accent: '#32CD32',
			},
		},
	},
	plugins: [],
};
