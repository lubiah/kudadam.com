import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import remark_breaks from 'remark-breaks';
import remark_emoji from 'remark-emoji';
import remark_torchlight from 'remark-torchlight';
import remark_gfm from 'remark-gfm';
import remark_slug from 'remark-slug';
import remark_containers from 'remark-containers';

const config = defineConfig({
	extensions: ['.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		remark_breaks,
		remark_slug,
		remark_containers,
		remark_gfm,
		[
			remark_emoji,
			{
				accessible: true,
				padSpaceAfter: true,
				emoticon: true
			}
		],
		/**
		 * dark-plus
		 * dracula
		 */
		[
			remark_torchlight,
			{
				config: {
					theme: 'dracula',
					cache: '.torchlight-cache'
				}
			}
		]
	],
	rehypePlugins: []
});

export default config;
