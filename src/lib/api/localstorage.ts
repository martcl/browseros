export function storeData(key: string, data: any) {
	const STORAGE_KEY = `WEBOS-${key}`;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function retriveData(key: string) {
	const STORAGE_KEY = `WEBOS-${key}`;
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
	} catch (e) {
		return null;
	}
}
