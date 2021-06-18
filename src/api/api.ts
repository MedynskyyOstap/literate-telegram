import axios from 'axios';
import { Database } from './models';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://api.notion.com/v1',
	headers: {
		'Authorization': process.env.NOTION_TOKEN,
		'Notion-Version': process.env.NOTION_VERSION
	}
});

export const databaseAPI = {
	getDatabase (database_id: string) {
		return instance.get(`databases/${database_id}/`)
	},
	getListDatabases () {
		return instance.get<Database[]>('databases')
	},
	updateListDatabases (database_id: string) {
		return instance.get(`databases/${database_id}/query`)
	},
};

export const pageAPI = {
	getPageAPI (page_id: string) {
		return instance.get(`pages/${page_id}`)
	},
	createPageAPI (database_id: string) {
		return instance.post('pages', { database_id })
	},
	updatePageAPI (page_id: string) {
		return instance.patch(`pages/${page_id}`)
	},
};

export const blockAPI = {
	getBlockChildren (block_id: string) {
		return instance.get(`blocks/${block_id}/children`)
	},
	updateBlockChildren (block_id: string) {
		return instance.patch(`blocks/${block_id}/children`)
	},
};

export const userAPI = {
	getUserAPI (user_id: string) {
		return instance.get(`users/${user_id}`)
	},
	getListUsersAPI () {
		return instance.get('users')
	},
};