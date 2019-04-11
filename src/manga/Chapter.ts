import { Page } from "./"

/**
 * Represents a single chapter in a manga
 *
 * @class Chapter
 * @classdesc Representation of a single chapter in a manga
 * @constructor
 *
 * @function
 *
 * @prop {string} title Title of the chapter
 * @prop {number} chapter_number Chapter number in the series
 * @prop {string} url Location of the chapter
 * @prop {number} upload_date Date of upload for chapter
 * @prop {string} scanlator Group that scanlated chapter
 */
class Chapter {
	private title: string;
	private chaper_number: number;
	private url: string;
	private upload_date: string;
	private scanlator: string;
	private pages: Page[] = [];

	/**
	 * @param title Title of the chapter
 	 * @param chapter_number Chapter number in the series
 	 * @param url Location of the chapter
 	 * @param upload_date Date of upload for chapter
 	 * @param scanlator Group that scanlated chapter
	 */
	constructor(title: string, chapter_number: number, url: string, upload_date: string, scanlator: string) {
		this.title = title;
		this.chapter_number = chapter_number;
		this.url = url;
		this.upload_date = upload_date;
		this.scanlator = scanlator;
	}
}

export {
	Chapter
}
