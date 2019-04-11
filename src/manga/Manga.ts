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
 * @prop {string} title Title of the chapter
 * @prop {string} url Location of the manga
 * @prop {string} thumbnail_url Location of the manga thumbnail
 * @prop {string?} artist Drawer for manga
 * @prop {string?} author Writer for manga
 * @prop {number} publication_status Satus of publication
 * @prop {number} rating Rating of the manga
 * @prop {string?} description Long description of manga
 * @prop {string[]} tags Array of applicable tags
 * @prop {Chapter[]} chapters Array of all chapters in series
 */
class Manga {
	private title: string;
	private url: string;
	private thumbnail_url: string;
	private artist: string?;
	private author: string?;
	private description: string?;
	private publication_status: number;
	private rating: number;
	private description: string;

	private tags: string[] = [];
	private chapters: Chapter[] = [];

	/**
	 * @param title Title of the chapter
 	 * @param chapter_number Chapter number in the series
 	 * @param url Location of the chapter
 	 * @param upload_date Date of upload for chapter
 	 * @param scanlator Group that scanlated chapter
	 */
	constructor(title: string, url: string, artist: string, author: string, description: string, publication_status: string, rating: number, tags: string[], chapters: Chapter[]) {
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
