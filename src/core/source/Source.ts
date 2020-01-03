/**
 * SourceManager.ts
 * - Initializes all sources availible in applicaiton.
 * - Determines which sources a manga can be downloaded from.
 * - Handles api interactions from designated sources
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { Sources, SourceType } from "./SourceList";
import MangaSee from "./sources/MangaSee";

const get = (source: SourceType, uri: string) => {
	switch (source) {
		case Sources.mangasee:
			return MangaSee.get(uri);
		default:
			return null;
	}
};

const getLatest = async (source: SourceType, page?: number) => {

	switch (source) {
		case Sources.mangasee:
			return page ? MangaSee.getLatest(page) : MangaSee.getLatest();
			break;

		default:
			return null;
	}
};

export {
	get,
	getLatest,
};
