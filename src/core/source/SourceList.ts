/**
 * SourceList.ts
 * - Collection of sources parsed by app.
 * Notes:
 * - N/A
 * Created 19-12-29
 * @author Elias Mawa <elias@emawa.io>
 */

const SFWSources = {
	mangadex: {
		name: 'mangadex',
		root: 'https://mangadex.org',
		nsfw: false,
	},
	mangahere: {
		name: 'mangahere',
		root: 'https://www.mangahere.cc',
		nsfw: false,
	},
	mangasee: {
		name: 'mangasee',
		root: 'https://mangaseeonline.us',
		nsfw: false,
	},
};

const NSFWSources = {
	mangadex: {
		name: 'mangadex',
		root: 'https://nhentai.net',
		nsfw: true,
	},
	ehentai: {
		name: 'e-hentai',
		root: 'https://e-hentai.org/',
		nsfw: true,
	},
};

const Sources = {
	...SFWSources,
	...NSFWSources,
};

export {
	SFWSources,
	NSFWSources,
	Sources,
};