/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/*",
		"./sections/*",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					sm: "600px",
					md: "728px",
					lg: "984px",
					xl: "1240px",
					// "2xl": "1440px",
				},
			},
		},
	},
	plugins: [],
};
