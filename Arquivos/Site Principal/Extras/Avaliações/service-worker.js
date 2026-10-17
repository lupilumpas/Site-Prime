const CACHE_NAME = "jdm-galeria-v1";

self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", event => {
    const request = event.request;

    // Só trabalha com requisições de imagens
    if (request.destination !== "image") {
        return;
    }

    event.respondWith(
        caches.match(request).then(cachedResponse => {
            // Se já estiver no cache, usa a cópia local
            if (cachedResponse) {
                return cachedResponse;
            }

            // Se não estiver, baixa normalmente e salva no cache
            return fetch(request).then(networkResponse => {

                if (!networkResponse || !networkResponse.ok) {
                    return networkResponse;
                }

                const responseClone = networkResponse.clone();

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, responseClone);
                });

                return networkResponse;
            });
        })
    );
});