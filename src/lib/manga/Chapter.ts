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

import { Chapter, Page } from ".";

interface Chapter {
	num: number;
	url: string;

	pages: Page.Page[];

	title: string | null;
	scanlator: string | null;
	uploadDate: Date | null;

}
/**
 * @param {string} title Title of the chapter
 * @param {number} chapter_number Chapter number in the series
 * @param {string} url Location of the chapter
 * @param {number} upload_date Date of upload for chapter
 * @param {string} scanlator Group that scanlated chapter
 *
 * @param {Page[]} pages Array of pages in chapter
 */
const createChapter = (num: number, uri: string, pages: Page.Page[], title?: string, scanlator?: string, uploadDate?: Date) => {
	const chapter: Chapter = {
		num,
		url: uri,
		pages,
		title: title ? title : null,
		scanlator: scanlator ? scanlator : null,
		uploadDate: uploadDate ? uploadDate : null,
	};

	return chapter;
};

const addPage = (chapter: Chapter, page: Page.Page) => {
	const p: Page.Page[] = [
		...chapter.pages,
		page,
	];

	const c: Chapter = {
		...chapter,
		pages: p,
	};
	return c;
};

export {
	Chapter,
	createChapter,
	addPage,
};
