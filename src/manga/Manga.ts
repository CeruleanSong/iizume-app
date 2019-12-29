/**
 * Manga.ts
 * - Functions for creating manga.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { Chapter } from "./";

interface Manga {
	title: string;
	uri: string;
	thumbnailUrl: string;
	chapters: Chapter.Chapter[];

	artist: string | null;
	author: string | null;
	publicationStatus: number | null;
	rating: number | null;
	description: string | null;

	tags: string[] | null;
}

/**
 * @param {string} title Title of the chapter
 * @param {string} url Location of the manga
 * @param {string} thumbnailUrl Location of the manga thumbnail
 * @param {string?} artist Drawer for manga
 * @param {string?} author Writer for manga
 * @param {string?} description Long description of manga
 * @param {number?} publicationStatus Satus of publication
 * @param {number?} rating Rating of the manga
 * @param {tags?} tags Array of applicable tags
 * @param {Chapter[]?} chapters Array of all chapters in series
 */
const createManga = (title: string, uri: string, thumbnailUrl: string, chapters: Chapter.Chapter[], artist?: string, author?: string,
		publicationStatus?: number, rating?: number, description?: string,
		tags?: string[]) => {
	const manga: Manga = {
		title,
		uri,
		thumbnailUrl,
		chapters,
		artist: artist ? artist : null,
		author: author ? author : null,
		publicationStatus: publicationStatus ? publicationStatus : null,
		rating: rating ? rating : null,
		description: description ? description : null,
		tags: tags ? tags : null,
	};
	return manga;
};

const addChapter = (manga: Manga, chapter: Chapter.Chapter) => {
	const c: Chapter.Chapter[] = [
		...manga.chapters,
		chapter,
	];

	const m: Manga = {
		...manga,
		chapters: c,
	};

	return m;
};

export {
	Manga,
	createManga,
	addChapter,
};
