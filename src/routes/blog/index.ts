export const getArticlesList = async (): Promise<BlogPost[]> => {
	const _import = import.meta.glob('./posts/**/*.md');
	const files: BlogPost[] = [];
	const readingTimeModule = (await import('$utils/reading-time')).default;

	for (const path in _import) {
		const slug = path.split('/')[2];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const index: any = await _import[path]();
		const html = index.default.render()['html'];
		const metadata: BlogPost = { ...index.metadata, slug };
		metadata.date = new Date(index.metadata.date);
		metadata.readingTime = readingTimeModule(html).text;
		files.push(metadata);
	}

	return files;
};
