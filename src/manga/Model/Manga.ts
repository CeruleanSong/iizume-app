/**
 * Manga.ts
 * This is a virtual representation of a manga series.
 * Contains imformation relevant to a manga series.
 * Contains No setters other than pushing new chapters.
 * 
 * Notes: 
 * - N/A
 * 
 * Created by Elias Mawa on 19-04-11
 * Last edit by Elias Mawa on 19-04-11
 */

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
 * 
 * @prop {string[]} tags Array of applicable tags
 * @prop {Chapter[]} chapters Array of all chapters in series
 */
class Manga {

	/*** public ****/

	/**
	 * @function push_chapter Push a page object to the page list
	 * 
	 * @param {Chapter} chapter Chapter object to be pushed into the page list
	 */
	public push_chapter(chapter: Chapter) { this.chapters.push(chapter); }

	/**
	 * @function push_new_chapter Add a chapter to the page list
	 * 
	 * @param {string} title Title of the chapter
	 * @param {number} chapter_number Chapter number in the series
	 * @param {string} url Location of the chapter
	 * @param {number} upload_date Date of upload for chapter
	 * @param {string} scanlator Group that scanlated chapter
	 */
	public push_new_page(title: string, chapter_number: number, url: string, upload_date: string, scanlator: string) { 
		this.chapters.push(new Chapter(title, chapter_number, url, upload_date, scanlator)); 
	}

	/**
	 * @function get_title Get title of the manga
	 * @return {string} The title of the manga
	 */
	public get_title(): string | null { return this.title; }

	/**
	 * @function get_url Get the url of the manga location
	 * @return {string?} The url of manga location
	 */
	public get_url(): string | null { return this.url; }

	/**
	 * @function get_thumbnail_url Get url of manga thumbnail
	 * @return {number?} The thumbnail url
	 */
	public get_thumbnail_url(): string | null { return this.thumbnail_url; }

	/**
	 * @function get_artist Get the artist of the manga
	 * @return {string?} The artist of the manga
	 */
	public get_artist(): string | null { return this.artist; }

	/**
	 * @function get_author  Get the author of the manga
	 * @return {string?} The author of the manga
	 */
	public get_author(): string | null { return this.author; }

	/**
	 * @function get_publication_status Get the publication status of the manga
	 * @return {number?} The publication status code
	 */
	public get_publication_status(): number | null { return this.publication_status; }

	/**
	 * @function get_rating Get the rating of the manga
	 * @return {number?} Rating of the manga
	 */
	public get_rating(): number | null { return this.rating; }

	/**
	 * @function get_description Get the description of the manga  
	 * @return {string?} Description of manga
	 */
	public get_description(): string | null { return this.description; }

	/**
	 * @function get_tags Return list of all tags related to manga
	 * @return {string[]?} All tags related to manga
	 */
	public get_tags(): string[] | null { return this.tags; }

	/*** private ****/

	private title: string;
	private url: string;
	private thumbnail_url: string;
	private artist: string | null;
	private author: string | null;
	private publication_status: number | null;
	private rating: number | null;
	private description: string | null;

	private tags: string[] = [];
	private chapters: Chapter[] = [];

	/*** constructors & deconstructors ****/
	
	/**
	 * @param {string} title Title of the chapter
 	 * @param {string} url Location of the manga
 	 * @param {string} thumbnail_url Location of the manga thumbnail
 	 * @param {string?} artist Drawer for manga
 	 * @param {string?} author Writer for manga
	 * @param {string?} description Long description of manga
	 * @param {number?} publication_status Satus of publication
 	 * @param {number?} rating Rating of the manga
	  * 
 	 * @param tags Array of applicable tags
	 */
	constructor(title: string, url: string, thumbnail_url: string, artist: string, author: string, description: string, publication_status: number, rating: number, tags: string[]) {
		this.title = title;
		this.url = url;
		this.thumbnail_url = thumbnail_url;
		this.artist = artist;
		this.author = author;
		this.description = description;
		this.publication_status = publication_status;
		this.rating = rating;
		this.tags = tags;
	}

}

export {
	Manga
};
