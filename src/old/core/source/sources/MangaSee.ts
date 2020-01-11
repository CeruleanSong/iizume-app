/**
 * MangaSee.ts
 * Notes:
 * - N/A
 * Created 19-12-29
 * @author Elias Mawa <elias@emawa.io>
 */

import axios from 'axios';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import qs from 'qs';
import { createChapter } from '../../../lib/manga/Chapter';
import { Manga } from '../../../lib/manga/Manga';
import { createManga } from '../../../lib/manga/Manga';
import { createPreview, Preview } from '../../../lib/manga/Preview';
import { Sources } from '../SourceList';

const ID = 2;
const source = Sources.mangasee;

const getManga = async (preview: Preview) => {

	let manga: any = null;

	const req = { source: 'mangasee', url: preview.url };

	await fetch('http://10.0.0.161:5757/api/manga/manga', {
		method: 'post',
		body: JSON.stringify(req),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(async (res) => {
		const data = await res.text();

		manga = JSON.parse(data);
	});

	return manga;
};

const getLatest = async (page: number = 1) => {

	const req = { source: 'mangasee', page: 1 };

	let list: Preview[] = [];

	await fetch('http://10.0.0.161:5757/api/manga/latest', {
		method: 'post',
		body: JSON.stringify(req),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(async (res) => {
		const data = await res.text();

		list = JSON.parse(data);
	});

	return list;
};

const getHot = async (page: number = 1) => {
	//
};

const query = async () => {
	//
};

const MangaSee = {
	getManga,
	getHot,
	getLatest,
};

export default MangaSee;
