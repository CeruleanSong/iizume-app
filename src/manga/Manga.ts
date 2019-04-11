import { Chapter } from "./";

/**
 * Represents a single chapter in a manga
 *
 * @class Manga
 * @classdesc Representation of a single chapter in a manga
 * @constructor
 *
 * @function
 *
 * @prop {String} title Title of the chapter
 * @prop {String} url Location of the manga
 * @prop {String} thumbnail_url Location of the manga thumbnail
 * @prop {String?} artist Drawer for manga
 * @prop {String?} author Writer for manga
 * @prop {number} publication_status Satus of publication
 * @prop {number} rating Rating of the manga
 * @prop {String?} description Long description of manga
 * @prop {String[]} tags Array of applicable tags
 * @prop {Chapter[]} chapters Array of all chapters in series
 */
class Manga {
	private title: String;
	private url: String;
	private thumbnail_url: String;
	private artist: String?;
	private author: String?;
	private description: String?;
	private publication_status: number;
	private rating: number;
	private description: String;

	private tags: String[] = [];
	private chapters: Chapter[] = [];

	/**
	 * @param title Title of the chapter
 	 * @param chapter_number Chapter number in the series
 	 * @param url Location of the chapter
 	 * @param upload_date Date of upload for chapter
 	 * @param scanlator Group that scanlated chapter
	 */
	constructor(title: String, url: String, artist: String, author: String, description: String, publication_status: String, rating: number, tags: String[], chapters: Chapter[]) {
		this.title = title;
		this.url = url;
		this.artist = artist;
		this.author = author;
		this.description = description;
		this.publication_status = publication_status;
		this.rating = rating;
		this.tags = tags;
		this.chapters = chapters;
	}
}

export {
	Manga
}
