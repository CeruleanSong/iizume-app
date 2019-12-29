/**
 * Preview.ts
 * - Manga preview object.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { Sources, SourceType } from '../../core/source/SourceList';

interface Preview {
	/** title of manga */
	title: string;
	/** uri of image preview */
	uri: string;
	/** source preview was grabbed from */
	source: SourceType;
	/** id from source if provided */
	id?: string | null;
}

/**
 * @param {string} title Page number of chapter
 * @param {string} uri Uri of image
 */
const createPreview = (title: string, uri: string, source: SourceType, id?: string) => {
	const preview: Preview = {
		title,
		uri,
		source,
		id: id ? id : null,
	};

	return preview;
};

export {
	Preview,
	createPreview,
};
