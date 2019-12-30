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
	nhentai: {
		name: 'nhentai',
		root: 'https://nhentai.net',
		nsfw: true,
	},
	ehentai: {
		name: 'e-hentai',
		root: 'https://e-hentai.org/',
		nsfw: true,
	},
};

// const Sources: any = [...SFWSources];
// const NSources: any = [...NSFWSources];
// Sources.concat(NSources);s

const Sources: any = Object.assign({}, SFWSources, NSFWSources);
// = {
// 	...SFWSources,
// 	...NSFWSources,
// };

// console.log(...Sources);
// console.log(Sources.mangasee);

// console.log(Sources[]);

// Sources[Symbol.iterator] = function*() {
// 	let k;
// 	for (k in this) {
// 		if (k) {
// 			// yield [k, this[k]];
// 			yield [this[k]];
// 		}
// 		// else {
// 		// 	yield ['', this[k]];
// 		// }
// 	}
// };

export {
	SourceType,
	SFWSources,
	NSFWSources,
	Sources,
};