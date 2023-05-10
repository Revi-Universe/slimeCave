import { json } from '@sveltejs/kit';
import { eggs } from '$lib/server/eggs';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
    return json(eggs);
}) satisfies RequestHandler;