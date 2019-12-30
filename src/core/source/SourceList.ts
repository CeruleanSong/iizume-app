/**
 * SourceList.ts
 * - Collection of sources parsed by app.
 * Notes:
 * - N/A
 * Created 19-12-29
 * @author Elias Mawa <elias@emawa.io>
 */

interface SourceType {
	name: string;
	root: string;
	nsfw: boolean;
	operation?: null;
	aliases?: [
		string,
	];
}

const SFWSources = {
	mangadex: {
		name: 'mangadex',
		root: 'https://mangadex.org',
		operation: null,
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
	mangalife: {
		name: 'mangalife',
		root: 'https://mangalife.us/',
		aliases: [
			'https://mangabeast.com',
		],
		nsfw: false,
	},
};

const NSFWSources: any = {
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

const Sources: any = {
	...SFWSources,
	...NSFWSources,
};

export {
	SourceType,
	SFWSources,
	NSFWSources,
	Sources,
};