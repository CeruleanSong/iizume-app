/**
 * Page.ts
 * - Functions for creating pages.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

interface Page {
	num: number;
	uri: string;
}

/**
 * @param {number} num Page number of chapter
 * @param {string} uri Uri of image
 */
const createPage = (num: number, uri: string) => {
	const page: Page = Object.freeze({
		num,
		uri,
	});

	return page;
};

export {
	Page,
	createPage,
};
