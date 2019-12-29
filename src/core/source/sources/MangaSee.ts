/**
 * MangaSee.ts
 * Notes:
 * - N/A
 * Created 19-12-29
 * @author Elias Mawa <elias@emawa.io>
 */

import axios from 'axios';
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

	let message: any = null;
	let status: any = null;

	const list: Preview[] = [];

	await axios.post(source.root + '/home/latest.request.php', qs.stringify(req), {
		method: 'post',
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
		},
	}).then((res) => {
		status = res.status;
		message = res.data;

		const root: any = parse(message);
		const root2 = '<ul id="list"><li>Hello World</li></ul>';
		const parsed = parse(root2);
		// console.log(json);

		const images = root.querySelectorAll('.latestImage img');
		const titles = root.querySelectorAll('.latestBox p.clamp2');
		const genres = root.querySelectorAll('.latestBox div.genreLastest');

		// console.log(images);
		const imageList = {...images};
		const genreList = {...genres};
		const titleList = {...titles};

		for (let i = 0;; i++) {
			if (images.hasOwnProperty(i) && genres.hasOwnProperty(i) && titles.hasOwnProperty(i)) {
				const titleTag = [...titles[i].childNodes];
				// console.log(titles[i].childNodes);
				let title: any = null;

				if (titleTag.hasOwnProperty(1)) {
					title = titleTag[1].rawText.split(' ');
				}
				else {
					title = titles[i].firstChild.rawText.split(' ');
				}

				let titleString = '';

				for (let j = 0; j < title.length - 1; j++) {
					titleString += title[j];
					// tslint:disable-next-line: no-magic-numbers
					if (j < title.length - 2)
					{
						titleString += ' ';
					}
				}
				list.push(createPreview(titleString.toString().trim(), images[i].attributes.src, Sources.mangasee));
			}
			else
			{
				break;
			}
		}

	}).catch((e: XMLHttpRequest) => {
		const res = e.response;

		message = res.data;
		status = res.status;
	});
	return list;
};

const getHot = async (page: number = 1) => {
	//
};

const query = async () => {
	//
};

export {
	get,
};

export {
	getLatest,
};