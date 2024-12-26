// service-worker.js

const CACHE_NAME = 'app-cache-v1';
const STATIC_CACHE = 'static-cache';
const DYNAMIC_CACHE = 'dynamic-cache';
let cacheHits = 0;
let cacheMisses = 0;

// Ресурси для кешування
const preCacheResources = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/logo.png'  // Замість цього ви можете додати реальні шляхи до ваших ресурсів
];

// Слухач події install для кешування статичних ресурсів
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(preCacheResources);
    })
  );
});

// Очищення старих кешів при активації
self.addEventListener('activate', event => {
  const cacheWhitelist = [STATIC_CACHE, DYNAMIC_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Обробка запитів
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Якщо відповідь є в кеші, повертаємо її
      if (cachedResponse) {
        cacheHits++;
        return cachedResponse;
      }

      // Якщо запиту немає в кеші, робимо запит до мережі
      cacheMisses++;
      return fetch(event.request).then(networkResponse => {
        // Кешуємо нові запити
        if (event.request.url.includes('/api/')) {  // Приклад для API запитів
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        } else {
          return networkResponse;
        }
      }).catch(error => {
        console.error('Помилка мережі:', error);
        throw error;  // Обробка помилок мережі
      });
    })
  );
});

// Слухач події для аналітики кешування
self.addEventListener('message', event => {
  if (event.data === 'getCacheStats') {
    event.ports[0].postMessage({ cacheHits, cacheMisses });
  }
});
