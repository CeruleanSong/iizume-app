/** Represents a single page in a chapter
 *
 * @class Page
 * @classdesc Representation of a single page in a chapter
 * @constructor
 *
 * @function
 *
 * @prop {number} page_number Page number in the chapter
 * @prop {string} image_url Url of page image
 */
class Page {
	private page_number: number;
	private image_url: string;

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
}
