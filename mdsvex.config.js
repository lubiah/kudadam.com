import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import remark_breaks from 'remark-breaks';
import remark_emoji from 'remark-emoji';
import remark_torchlight from '@kudadam/remark-torchlight';
import remark_frontmatter from 'remark-frontmatter';
import remark_gfm from 'remark-gfm';
import remark_parse from 'remark-parse';
import remark_slug from 'remark-slug';
import remark_escape from './remarkPlugins/escapeEntities.js';
import remark_directive from 'remark-directive';
import remark_notes from './remarkPlugins/remarkNotes/index.js';

const config = defineConfig({
	extensions: ['.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		remark_parse,
		remark_frontmatter,
		remark_directive,
		remark_notes,
		remark_breaks,
		remark_slug,
		remark_gfm,
		[
			remark_emoji,
			{
				accessible: true,
				emoticon: true
			}
		],
		[
			remark_torchlight,
			{
				config: {
					theme: 'dracula',
					cache: '.torchlight-cache'
				}
			}
		],
		remark_escape
	],
	rehypePlugins: []
});

export default config;
