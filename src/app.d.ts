// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface BlogPost {
		title: string,
		excerpt: string,
		image: string,
		slug: string,
		date: Date
	}
}


export {};
