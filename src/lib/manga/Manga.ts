import { Chapter } from './Chapter';

export interface Manga {
	origin: string;
	title?: string;
	author?: string;
	artist?: string;
	description: string | null;
	tags: string[];
	chapter_list: Chapter[];
}
