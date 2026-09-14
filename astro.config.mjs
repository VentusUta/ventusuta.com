// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ventusuta.com',
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Charter',
			cssVariable: '--font-charter',
			fallbacks: ['serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/charter_regular.woff2'],
						weight: 'normal',
						style: 'normal',
					},
					{
						src: ['./src/assets/fonts/charter_italic.woff2'],
						weight: 'normal',
						style: 'italic',
					},
					{
						src: ['./src/assets/fonts/charter_bold.woff2'],
						weight: 'bold',
						style: 'normal',
					},
					{
						src: ['./src/assets/fonts/charter_bold_italic.woff2'],
						weight: 'bold',
						style: 'italic',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Google Sans Code',
			cssVariable: '--font-google-sans-code',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/GoogleSansCode[wght].ttf'],
						weight: '300 800',
						style: 'normal',
					},
					{
						src: ['./src/assets/fonts/GoogleSansCode-Italic[wght].ttf'],
						weight: '300 800',
						style: 'italic',
					},
				],
			},
		},
	],
});


