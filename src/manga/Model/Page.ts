/**
 * Page.ts
 * This is a virtual representaiton of a single page in a manga.
 * Contains the location of the page image & page numer.
 * 
 * Notes: 
 * - N/A
 * 
 * Created by Elias Mawa on 19-04-11
 * Last edit by Elias Mawa on 19-04-11
 */

/** Represents a single page in a chapter
 *
 * @class Page
 * @classdesc Representation of a single page in a chapter
 *
 * @prop {number} page_number Page number in the chapter
 * @prop {string} image_url Url of page image
 */
class Page {
	
	/*** public ****/

	/**
	 * @function get_image_url Returns url of chapter image
	 * @return {string} Get the url of the chapter image
	 */
	public get_image_url(): string { return this.image_url }

	/**
	 * @function get_image_url Returns page number in chapter
	 * @return {number}Get the page number of the page
	 */
	public get_page_number(): number { return this.page_number }

	/*** private ****/

	private page_number: number;
	private image_url: string;

	/*** constructors & deconstructors ****/

	/**
	 * @param page_number Page number in the chapter
 	 * @param image_url Url of page image
	 */
	constructor(page_number: number, image_url: string) {
		this.page_number = page_number;
		this.image_url = image_url;
	}
}

export {
	Page
};
