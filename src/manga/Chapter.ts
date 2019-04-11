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
 * @prop {String} title Title of the chapter
 * @prop {number} chapter_number Chapter number in the series
 * @prop {String} url Location of the chapter
 * @prop {number} upload_date Date of upload for chapter
 * @prop {String} scanlator Group that scanlated chapter
 */
class Chapter {
	private title: String;
	private chaper_number: number;
	private url: String;
	private upload_date: String;
	private scanlator: String;
	private pages: Page[] = [];

	/**
	 * @param title Title of the chapter
 	 * @param chapter_number Chapter number in the series
 	 * @param url Location of the chapter
 	 * @param upload_date Date of upload for chapter
 	 * @param scanlator Group that scanlated chapter
	 */
	constructor(title: String, chapter_number: number, url: String, upload_date: String, scanlator: String) {
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
