addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});


/**
 * Add Cross-Origin Isolation headers if necessary.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
    const { pathname, searchParams } = new URL(request.url);
    const response = await fetch(new URL(pathname, `https://${searchParams.get('host') ?? 'bur.gy'}`));
    const headers = new Headers(response.headers);
    headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers
    });
}
