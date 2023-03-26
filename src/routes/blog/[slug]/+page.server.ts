import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
    const { slug } = params;
    const article =  (await import(`../posts/${slug}/index.md`)).default.render()['html'];
    const readingTimeModule = (await import("$utils/reading-time")).default
    const readingTime = readingTimeModule(article)
    
    return {
        readingTime
    }

}) satisfies PageServerLoad