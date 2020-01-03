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
import { createPreview, Preview } from '../../../lib/manga/Preview';
import { Sources } from '../SourceList';

const ID = 2;
const source = Sources.mangasee;

const get = async (uri: string) => {
	// await axios.post(config.server.url+'/auth', req, {
	// 	withCredentials: true,
	// }).then((res) => {
	// 	status = res.status;
	// 	route(status);
	// }).catch((e: XMLHttpRequest) => {
	// 	const res = e.response;

	// 	message = res.data;
	// 	status = res.status;
	// });
};

const getLatest = async (page: number = 1) => {

	const req = { page };

	const list: Preview[] = [];

	await fetch(source.root + '/home/latest.request.php', {
		method: 'post',
		body: qs.stringify(req),
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
		},
	}).then(async (res) => {
		const data = await res.text();
		const root: any = parse(data);

		const imgList = root.querySelectorAll('.latestImage img');
		const urlList = root.querySelectorAll('a.latestSeries');
		const titleList = root.querySelectorAll('.latestBox p.clamp2');
		const genreList = root.querySelectorAll('.latestBox div.genreLastest');

		for (let i = 0;; i++) {
			if (imgList.hasOwnProperty(i) && titleList.hasOwnProperty(i)
			 && genreList.hasOwnProperty(i)) {

				/* get title */
				const titleTag = [...titleList[i].childNodes];
				let title: any = [];

				if (titleTag.hasOwnProperty(1)) {
					title = titleTag[1].rawText.split(' '); // if 'HOT' icon is present
				}
				else {
					title = titleList[i].firstChild.rawText.split(' '); // If there is no 'HOT' icon
				}

				// This loop removes 'online for free' that's at the end of all titles
				let titleString = '';
				for (let j = 0; j < title.length - 1; j++) {
					titleString += title[j];
					// tslint:disable-next-line: no-magic-numbers
					if (j < title.length - 2) {
						titleString += ' ';
					}
				}
				/* get title */

				const url = source.root + urlList[i].attributes.href;

				list.push(createPreview(
					titleString.toString().trim(), imgList[i].attributes.src, url, Sources.mangasee));
			}
			else
			{
				break;
			}
		}

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
	get,
	getHot,
	getLatest,
};

export default MangaSee;
