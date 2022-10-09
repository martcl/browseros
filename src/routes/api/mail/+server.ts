import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = ({ url }) => {
	const reciver = Number(url.searchParams.get('reciver') ?? '');
	const header = Number(url.searchParams.get('header') ?? '1');
	const message = Number(url.searchParams.get('message') ?? '1');

	if (!reciver || !header || !message) {
		error(400, 'reciver, header and message is required');
	}

	const random = Math.random() * 100;

	return new Response(String(random));
};
