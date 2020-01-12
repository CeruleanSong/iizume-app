/**
 * Chaper.ts
 * This is a virtual representation of a single chapter in a manga series
 * Contains imformation relevant to a chaper in a manga series.
 * Contains No setters other than pushing new pages.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { Chapter } from ".";

interface Chapter {
	num: number;
	url: string;
	images: string[] | null;

	title: string | null;
	uploadDate: Date | null;
}

interface ChapterDeconstruction {
	title?: string;
	scanlator?: string;
	uploadDate?: Date;
}

/**
 * @param {number} num Chapter number in the series
 * @param {string} url Location of the chapter
 * @param {string[]} images Array of images in chapter
 *
 */
const createChapter = (num: number, url: string, images: string[],
	{ title, uploadDate }: ChapterDeconstruction) => {
	const chapter: Chapter = {
		num,
		url,
		images: images ? images : null,
		title: title ? title : null,
		uploadDate: uploadDate ? uploadDate : null,
	};

	return chapter;
};

export {
	Chapter,
	createChapter,
};
