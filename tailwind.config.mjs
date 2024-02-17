/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ["text-4xl", "text-2xl", "text-xl", "text-lg", "font-normal"],
	theme: {
		extend: {},
	},
	plugins: [],
}