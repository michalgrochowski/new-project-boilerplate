const CACHE_STATIC_NAME = "cachename";
const CACHE_DYNAMIC_NAME = "cachename-1521013165219";
const URLS_TO_CACHE  = [
  "/index.html",
  "/manifest.json",
  "https://fonts.googleapis.com/...",
  "/css/main.min.css",
  "/js/main.min.js",
  "/fonts/...",
  "/font/...",
  "/img/...",
  "/android-chrome-36x36.png",
  "/android-chrome-48x48.png",
  "/android-chrome-72x72.png",
  "/android-chrome-96x96.png",
  "/android-chrome-144x144.png",
  "/android-chrome-192x192.png",
  "/android-chrome-256x256.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/apple-touch-icon-60x60.png",
  "/apple-touch-icon-76x76.png",
  "/apple-touch-icon-120x120.png",
  "/apple-touch-icon-152x152.png",
  "/apple-touch-icon-180x180.png",
  "/browserconfig.xml",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/mstile-150x150.png",
  "/safari-pinned-tab.svg"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_DYNAMIC_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      }).catch(error => {
        console.log(error);
    })
  );
});

self.addEventListener('activate',  event => {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
        cacheNames
        .map(key => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
    );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
        response => {
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
        var responseToCache = response.clone();
        caches.open(CACHE_DYNAMIC_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        return response;
        }
      );
    })
  );
});