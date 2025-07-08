
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('td-confeitaria').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo.jpeg',
        '/manifest.json',
        '/service-worker.js',
        '/logo-192.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
