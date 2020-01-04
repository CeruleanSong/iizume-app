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
import { Chapter, Manga } from '../../../lib/manga';
import { createChapter } from '../../../lib/manga/Chapter';
import { createManga } from '../../../lib/manga/Manga';
import { createPreview, Preview } from '../../../lib/manga/Preview';
import { Sources } from '../SourceList';

const ID = 2;
const source = Sources.mangasee;

const get = async (preview: Preview) => {

	let manga: Manga.Manga | null = null;

	await fetch(preview.uri, {
		method: 'post',
	}).then(async (res) => {
		const data = await res.text();
		const root: any = parse(data);

		const mangaLink = root.querySelectorAll('.list-link')[0];

		await fetch(source.root + mangaLink.attributes.href, {
			method: 'post',
		}).then(async (mangaPage) => {
			const mangaData = await mangaPage.text();
			const html: any = parse(mangaData);

			const info = html.querySelectorAll('.details div.row div');
			const authorList = [];
			const genreList = [];
			let type = '';
			let status = '';
			let description = '';

			if (info.length === 7) { // if 'alternate names' exists everytinh is +1
				const authors = info[1].querySelectorAll('a');
				for (const tag of authors) {
					authorList.push(tag.innerHTML);
				}

				const genres = info[2].querySelectorAll('a');
				for (const tag of genres) {
					genreList.push(tag.innerHTML);
				}

				type = info[3].querySelectorAll('a')[0].innerHTML;

				const s: string = info[5].querySelectorAll('a')[0].innerHTML;
				status = s.split(' ')[0];

				description = info[6].querySelectorAll('.description')[0].innerHTML;

			} else {

				const authors = info[0].querySelectorAll('a');
				for (const tag of authors) {
					authorList.push(tag.innerHTML);
				}

				const genres = info[1].querySelectorAll('a');
				for (const tag of genres) {
					genreList.push(tag.innerHTML);
				}

				type = info[2].querySelectorAll('a')[0].innerHTML;

				const s: string = info[4].querySelectorAll('a')[0].innerHTML;
				status = s.split(' ')[0];

				description = info[5].querySelectorAll('.description')[0].innerHTML;
			}

			const chapterList = html.querySelectorAll('a.list-group-item');

			const chapterObjectList: Chapter.Chapter[] = [];
			for (const tag of chapterList) {
				// tslint:disable-next-line: no-string-literal
				chapterObjectList.push(createChapter(tag.attributes['Chapter'], tag.attributes.href));
			}

			// let manga = createManga()
			// console.log('manga: ' + mangaLink.attributes.href
			// + '\nchapters: ' + chapterList.length
			// + '\ngenre(s): ' + genreList
			// + '\nauthor(s): ' + authorList
			// + '\ntype: ' + type
			// + '\nstatus: ' + status);

			manga = createManga(preview.title, preview.uri, preview.img, chapterObjectList,
				authorList.toString(), authorList.toString(), status, 0, description, genreList);
		});
	});

	return manga;
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
