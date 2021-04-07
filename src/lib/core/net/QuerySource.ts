import fetch from 'node-fetch';

import config from '../../../../config/config.json';

export const hello = 'world!';

export const getLatest = async (source: string, page: number) => {
	const form = new URLSearchParams();
	form.append('page', page.toString());
	const responce = await fetch(`${config.api}/search/latest/${source}`, {
		method: 'post',
		body: form
	});
	if(responce.status === 200) {
		return JSON.parse(await responce.text());

	} else {
		return null;
	}
};