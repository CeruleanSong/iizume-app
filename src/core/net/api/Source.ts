/**
 * Source.ts
 * - Interacts with iizu.me api
 * Notes:
 * - N/A
 * Created 20-01-11
 * @author Elias Mawa <elias@emawa.io>
 */

const api = 'iizu.me/api';

const getSources = async () => {
	const req = { };
	let data: [] = [];

	await fetch('https://' + api + '/manga/sites', {
		method: 'post',
		body: JSON.stringify(req),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(async (res) => {
		const responce = await res.text();
		data = JSON.parse(responce);
	});

	return data;
};

const getLatest = async (source: string, page: number) => {
	const req = { source, page };
	let data: [] = [];

	console.log(req);

	await fetch('https://' + api + '/manga/latest', {
		method: 'post',
		body: JSON.stringify(req),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(async (res) => {
		const responce = await res.text();
		data = JSON.parse(responce);
	});

	return data;
};

export {
	getSources,
	getLatest,
};
