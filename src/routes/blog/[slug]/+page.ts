import type { PageLoad } from './$types';

export const load = (async ({ params, data }) => {
	const { slug } = params;
	const article = await import(`../posts/${slug}/index.md`);
	const component = await article.default;
	const metadata: BlogPost = { ...article.metadata, slug, ...data };

	return {
		component,
		metadata
	};
}) satisfies PageLoad;
