const CACHE_NAME = 'my-cache-v1'; 
const urlsToCache = [
	'./index.html',
	'./style.css',
	'./app.js'
];

self.addEventListener('install', event => {
		console.log('Service Worker встановлюється...');
		event.waitUntil(
			caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
		);
});

self.addEventListener('active', event => {
		console.log('Service Worker активовано');
		event.waitUntil(
		caches.keys().then(cacheNames => Promise.all(
			cacheNames.map(cache => {
				if(cache !== CACHE_NAME){
					return caches.delete(cache)
				}
			})
		))
	);	
});

self.addEventListener('fetch', event => {
	event.respondWith(
			caches.match(event.request).then(cachedResponse => {
					if (cachedResponse) {
							console.log(`Відповідь з кешу: ${event.request.url}`);
							return cachedResponse;
					}
					return fetch(event.request).then(networkResponse => {
							return caches.open('dynamic-cache').then(cache => {
									cache.put(event.request, networkResponse.clone());
									return networkResponse;
							});
					});
			}).catch(() => caches.match(urlsToCache))
	);
});
function cacheFirst(request) {
	return caches.match(request).then(cachedResponse => {
			if (cachedResponse) {
					return cachedResponse;
			}
			return fetch(request).then(networkResponse => {
					return caches.open('dynamic-cache').then(cache => {
							cache.put(request, networkResponse.clone());
							return networkResponse;
					});
			});
	});
}

self.addEventListener('fetch', event => {
	event.respondWith(cacheFirst(event.request));
});

const fetchWithTimeout = (url, timeout = 5000) => {
	return new Promise((resolve, reject) => {
			const timer = setTimeout(() => reject(new Error('Запит перевищив час очікування')), timeout);
			fetch(url).then(response => {
					clearTimeout(timer);
					resolve(response);
			}).catch(reject);
	});
};

self.addEventListener('message', event => {
	if (event.data.action === 'clearCache') {
			caches.delete('dynamic-cache').then(() => console.log('Кеш очищено'));
	}
});

let cacheHits = 0;

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                cacheHits++;
                console.log(`Кількість запитів з кешу: ${cacheHits}`);
            }
            return response || fetch(event.request);
        })
    );
});
