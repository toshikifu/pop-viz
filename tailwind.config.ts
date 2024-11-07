import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ['"M PLUS 2"'],
			},
		},
	},
	plugins: [],
} satisfies Config;
