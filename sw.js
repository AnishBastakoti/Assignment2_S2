const cacheTitle = 'bookbankcache';
const cacheVersion = 'v1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  'index.html',
  'views/mainpage.html',
  'views/book.html',
  'views/cancel.html',
  'views/checkout.html',
  'views/confirm.html',
  'views/userinfo.html',
  'style.css',
  'book.css',
  'cancel.css',
  'checkout.css',
  'checkout1.css',
  'mainpage.css',
  'menu.css',
  'user.css',
  'book.js',
  'cancel.js',
  'card.js',
  'checkout.js',
  'contact_me.js',
  'login.js',
  'popup.js',
  'mainpage.js',
  'index.js',
  'aero.png',
  'civil.png',
  'book.png',
  'comic.png',
  'cyber.png',
  'doctor.png',
  'harrypotter.png',
  'harrypotter1.png',
  'harrypotter3.png',
  'icon.png',
  'icon1.png',
  'icon2.jpg',
  'img3.png',
  'img5.png',
  'img1.png',
  'jk.jpg',
  'law.png',
  'martin.jpg',
  'maya.jpg',
  'ML.png',
  'novel.png',
  'novel1.png',
  'search.png',
  'toni.jpg',
  'spider.png',
];

self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
