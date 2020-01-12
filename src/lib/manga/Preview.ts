/**
 * Preview.ts
 * - Manga preview object.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

interface Preview {
	/** title of manga */
	title: string;
	/** uri of image preview */
	img: string;
	/** page where the reader exists */
	url: string;
	/** source preview was grabbed from */
	source: string;
	/** id from source if provided */
	id?: string | null;
}

/**
 * @param {string} title Page number of chapter
 * @param {string} uri Uri of image
 */
const createPreview = (title: string, img: string, url: string, source: string, id?: string) => {
	const preview: Preview = {
		title,
		img,
		url,
		source,
		id: id ? id : null,
	};

	return preview;
};

export {
	Preview,
	createPreview,
};
