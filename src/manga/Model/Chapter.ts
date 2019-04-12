/**
 * Chaper.ts
 * This is a virtual representation of a single chapter in a manga series
 * Contains imformation relevant to a chaper in a manga series.
 * Contains No setters other than pushing new pages.
 * 
 * Notes: 
 * - N/A
 * 
 * Created by Elias Mawa on 19-04-11
 * Last edit by Elias Mawa on 19-04-11
 */

import { Page } from "./"

/**
 * Represents a single chapter in a manga
 *
 * @class Chapter
 * @classdesc Representation of a single chapter in a manga
 * @constructor
 *
 * @function push_page Push a page to the chapter page list
 * @function push_new_page Push a page to the chapter page list
 * @function get_chapter_length Get the total number of pages in chapter
 * @function get_page Get the specified page
 * 
 * @prop {string} title Title of the chapter
 * @prop {number} chapter_number Chapter number in the series
 * @prop {string} url Location of the chapter
 * @prop {number} upload_date Date of upload for chapter
 * @prop {string} scanlator Group that scanlated chapter
 * 
 * @prop {Page[]} pages Array of pages in chapter
 */
class Chapter {

	/*** public ****/
	
	/**
	 * @function push_page Returns the number of pages in the chapter
	 * 
	 * @param {Page} page page object to be pushed into the page list
	 */
	public push_page(page: Page) { this.pages.push(page); }

	/**
	 * @function push_new_page Returns the number of pages in the chapter
	 * 
	 * @param {string} page_number The numbering of page in chapter
	 * @param {number} image_url Url of the page image
	 */
	public push_new_page(page_number: number, image_url: string) { this.pages.push(new Page(page_number, image_url)); }

	/**
	 * @function get_chapter_length Returns the number of pages in the chapter
	 * @return {number?} The number of pages in the chapter
	 */
	public get_chapter_length(): number | null { return this.pages.length; }

	/**
	 * @function get_page Returns the page object of the specified page (starting from 0)
	 * @return {number?} The specified page object
	 * @param {number} page_number The page number of specfied page (starting from 0)
	 */
	public get_page(page_number: number): Page | null { return this.pages[page_number]; }

	/**
	 * @function get_title Returns the title of the chapter
	 * @return {string?} The title of the chapter image
	 */
	public get_title(): string | null { return this.title; }

	/**
	 * @function get_chapter_number Returns the chapter number in the manga series
	 * @return {number?} The numbering of the chapter in manga series
	 */
	public get_chapter_number(): number | null { return this.chapter_number; }

	/**
	 * @function get_url Returns the url location of the chapter
	 * @return {string?} The url location of the chapter
	 */
	public get_url(): string | null { return this.url; }

	/**
	 * @function get_upload_date Returns the upload date of the chapter
	 * @return {string?} The upload date of chapter
	 */
	public get_upload_date(): string | null { return this.upload_date; }	
	
	/**
	* @function get_scanlator Returns the scanlator of the chapter
	* @return {string?} Get the scanlator of the chapter image
	*/
   public get_scanlator(): string | null { return this.scanlator; }

	/*** private ****/
	
	private title: string;
	private chapter_number: number;
	private url: string;
	private upload_date: string;
	private scanlator: string;

	private pages: Page[] = [];

	/*** constructors & deconstructors ****/

	/**
	 * @param {string} title Title of the chapter
 	 * @param {number} chapter_number Chapter number in the series
 	 * @param {string} url Location of the chapter
 	 * @param {string} upload_date Date of upload for chapter
 	 * @param {string} scanlator Group that scanlated chapter
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
};
