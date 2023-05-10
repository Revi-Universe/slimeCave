import type { LayoutServerLoad   } from './$types';

export const load = (async (event) => {
    const { params } = event;
    const eggs = await event.fetch('/api/showEggs', {
        method: 'POST',
        body: '',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return {
        eggs: await eggs.json()
    };
}) satisfies LayoutServerLoad ;