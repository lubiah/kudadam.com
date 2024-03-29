// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare interface BlogPost {
	title: string;
	excerpt: string;
	readingTime: string;
	image: string;
	slug: string;
	date: Date;
	updated?: Date;
}

// https://github.com/poppa/sveltekit-svg
declare module '*.svg?component' {
	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';

	const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>;

	export default content;
}

declare module '*.svg?src' {
	const content: string;
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare module '*.svg?dataurl' {
	const content: string;
	export default content;
}

declare module '*.svg?dataurl=base64' {
	const content: string;
	export default content;
}

declare module '*.svg?dataurl=enc' {
	const content: string;
	export default content;
}

declare module '*.svg?dataurl=unenc' {
	const content: string;
	export default content;
}
